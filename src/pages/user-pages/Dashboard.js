import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Badge } from 'react-bootstrap';

import { useAuth, useDashMenu, useTicketAPI } from '../../hooks';
import { PageHeader, BannerSuccess } from '../../components/ui';

export default function Dashboard() {
  const [totalPending, setTotalPending] = useState(0);
  const { currUser, isManager } = useAuth();
  const { getPendingTickets } = useTicketAPI();
  const { employeeMenu, managerMenu } = useDashMenu(currUser, totalPending);

  useEffect(() => {
    const fetchPendingCount = async () => {
      const pendingArr = await getPendingTickets();
      setTotalPending(pendingArr.length);
    };
    fetchPendingCount();
  }, []);

  const showEmployeeBadge = employeeMenu.find(
    (menu) => menu.link === `view-pending/${currUser.userId}` && currUser.pendingTickets > 0
  );

  const showManagerBadge =
    isManager &&
    managerMenu.find((menu) => menu.link === 'view-pending/process' && totalPending > 0);

  const menu = isManager ? managerMenu : employeeMenu;

  return (
    <div className="container-xs">
      <header className="mx-auto">
        <PageHeader title={isManager ? 'Manager Dashboard' : 'Employee Dashboard'} />
        <BannerSuccess content={`Hello, ${currUser.fullName}`} />
      </header>

      <main className="mx-4 my-3 px-1 row text-center">
        {menu.map(({ title, btnText, link, badgeCount }) => (
          <Card
            key={btnText}
            className="col-sm-5 border-0 mx-auto my-2 py-4">
            <Card.Title className="fw-normal">{title}</Card.Title>
            <Link
              key={link}
              to={link}>
              <Button
                size="lg"
                variant="primary"
                className="mx-auto mt-2 p-3">
                {btnText}
                {(showEmployeeBadge || showManagerBadge) && badgeCount && (
                  <Badge
                    pill
                    bg="warning"
                    text="dark"
                    className="ms-2 ">
                    {badgeCount}
                  </Badge>
                )}
              </Button>
            </Link>
          </Card>
        ))}
      </main>
    </div>
  );
}

import { startCase } from 'lodash';
import { format } from 'date-fns';

export class User {
  constructor(userId, username, firstName, lastName, role, dept, numPending, numTickets) {
    this.userId = userId;
    this.username = username;
    this.fullName = `${firstName} ${lastName}`;
    this.role = role;
    this.dept = dept;
    this.pendingTickets = numPending;
    this.totalTickets = numTickets;
  }
}

export class Ticket {
  constructor(ticketId, submittedOn, userId, employeeName, amount, category, status, comments) {
    this.ticketId = ticketId;
    this.submittedOn = format(new Date(submittedOn), 'MMM dd, yyyy');
    this.userId = userId;
    this.employeeName = employeeName;
    this.amount = `$${Number(amount).toFixed(2)}`;
    this.category = category;
    this.status = startCase(status);
    this.comments = comments;
  }
}

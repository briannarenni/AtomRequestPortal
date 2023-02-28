import React from 'react';

import { PageHeader } from '../components/ui';

export default function FAQ() {
  return (
    <>
      <PageHeader title="Frequently Asked Questions" />
      <article className="my-2 mx-auto py-3 px-5 w-100">
        <section className="px-3">
          <h2 className="fw-normal"> What can I submit a reimbursement request for?</h2>
          <p>
            Reimbursement requests can be submitted for any expenses incurred during off-site
            assignments. Please note that requests can only be submitted
            <em>after an assignment is completed</em>, not during.
          </p>
        </section>

        <section className="px-3">
          <h2 className="fw-normal">What do I need to submit a request?</h2>
          <p>
            To submit a new request, sign into your employee account and choose
            <mark>New Reimbursement Request</mark> on the dashboard. Requests should be separated
            into the following 4 categories:
          </p>

          <dl className="row w-75 mx-auto">
            <dt className="col-sm-2">Travel</dt>
            <dd className="col-sm">i.e. flight ticket or car rental</dd>
            <dt className="col-sm-2">Lodging</dt>
            <dd className="col-sm">i.e. hotel stay</dd>
            <dt className="col-sm-2">Food</dt>
            <dd className="col-sm">
              not including room service, which is covered under the hotel bill
            </dd>
            <dt className="col-sm-2">Other</dt>
            <dd className="col-sm">
              i.e. conference registration fees, office supplies, or parking expenses
            </dd>
            <small className="fst-italic">
              <strong>NOTE: </strong>Requests submitted with the "Other" category must include
              details of the expense in the comments section on submission.
            </small>
          </dl>

          <p>
            For example, submitting requests for a work assignment requiring a hotel and rental car
            should have one request under <strong>Lodging</strong>, and the other under
            <strong>Travel</strong>.
          </p>
        </section>

        <section className="px-3">
          <h2 className="fw-normal">How does the request process work?</h2>
          <p>
            While on assignment, receipts for any expenses incurred should be submitted to your
            supervisor in your post-assignment packet. Submitted requests will be approved or denied
            by your department supervisor, or by HR directly. You can view both pending and
            completed requests from the Dashboard.
          </p>
          <p className="small">
            <strong>NOTE: </strong>
            <em>Compensation can only be requested for expenses that have a receipt.</em>
          </p>
        </section>

        <section className="px-3">
          <h2 className="fw-normal">Why was my request denied?</h2>
          <p>Common reasons for denial are:</p>
          <ul>
            <li>The work assignment is still in progress and not completed</li>
            <li>
              No receipt was submitted in the post-assignment packet for the requested expense
            </li>
            <li>The request was submitted under the wrong category</li>
          </ul>
          <p>If none of these reasons apply, please email your direct supervisor.</p>
        </section>

        <section className="px-3">
          <h2 className="fw-normal">What if I submit a request with the wrong amount?</h2>
          <p>
            You can submit another request right away, but
            <strong>be sure to include the erroneous request ID</strong> in the comments section of
            the new request.
          </p>
        </section>
      </article>
    </>
  );
}

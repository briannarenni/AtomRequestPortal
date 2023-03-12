import React from 'react';
import { Divider } from 'primereact/divider';
import { Fieldset } from 'primereact/fieldset';

import { PageHeader } from '../components/ui';

export default function FAQ() {
  return (
    <>
      <PageHeader title="Frequently Asked Questions" />
      <article className="my-2 mx-auto px-5 w-100">
        <Fieldset
          legend="What expenses are eligible for reimbursement?"
          toggleable>
          <p className="m-0">
            Reimbursement requests can be submitted for any expenses incurred during off-site
            assignments. Please note that requests can only be submitted after an assignment is
            <em> completed</em>, not during.
          </p>
        </Fieldset>

        <Divider />

        <Fieldset
          legend="What do I need to submit a request?"
          toggleable>
          <p className="m-0">
            To submit a new request, sign into your employee account and choose
            <mark>New Reimbursement Request</mark> on the dashboard. Requests should be separated
            into the following 4 categories:
          </p>

          <dl className="row p-2 mx-auto">
            <dt className="col-sm-3">Travel</dt>
            <dd className="col-sm-9">i.e. flight ticket or car rental</dd>
            <dt className="col-sm-3">Lodging</dt>
            <dd className="col-sm-9">i.e. hotel stay</dd>
            <dt className="col-sm-3">Food</dt>
            <dd className="col-sm-9">
              not including room service, which is covered under the hotel bill
            </dd>
            <dt className="col-sm-3">Other *</dt>
            <dd className="col-sm-9">
              i.e. conference registration fees, office supplies, or parking expenses
            </dd>
            <small className="fst-italic">
              <strong>*NOTE: </strong>Requests submitted with the "Other" category must include
              additional details in the comments section on submission.
            </small>
          </dl>
          <p>
            For example, submitting requests for a work assignment requiring a hotel and rental car
            should have one request under <strong>Lodging</strong>, and the other under
            <strong> Travel</strong>.
          </p>
        </Fieldset>

        <Divider />

        <Fieldset
          legend="How does the request process work?"
          toggleable>
          <p className="m-0">
            While on assignment, receipts for any expenses incurred should be submitted to your
            supervisor in your post-assignment packet. Submitted requests will be approved or denied
            by your department supervisor, or by HR directly. You can view both pending and
            completed requests from the Dashboard.
          </p>
          <br />
          <small>
            <strong>NOTE: </strong>
            <em>Compensation can only be requested for expenses that have a receipt.</em>
          </small>
        </Fieldset>

        <Divider />

        <Fieldset
          legend="Why was my request denied?"
          toggleable>
          <p className="m-0">Common reasons for denial are:</p>
          <ul>
            <li>The work assignment is still in progress and not completed</li>
            <li>
              No receipt was submitted in the post-assignment packet for the requested expense
            </li>
            <li>The request was submitted under the wrong category</li>
          </ul>
          <p>If none of these reasons apply, please email your direct supervisor.</p>
        </Fieldset>

        <Divider />

        <Fieldset
          legend="What if I submit a request with the wrong amount?"
          toggleable>
          <p className="m-0">
            You can submit another request right away, but
            <strong>be sure to include the erroneous request ID</strong> in the comments section of
            the new request.
          </p>
        </Fieldset>
      </article>
    </>
  );
}

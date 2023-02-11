import React from 'react';

export default function FAQ() {

  return (
    <>
      <h1 className="text-center">Frequently Asked Questions</h1>
      <article className="my-2 mx-3 p-3">
        <h3> What can I submit a reimbursement request for?</h3>
        <p>Reimbursement requests can be submitted for any expenses incurred during off-site assignments. Please note that requests can only be submitted <em>after an assignment is completed</em>, not during. </p>

        <h3>What do I need to submit a request?</h3>
        <p>To submit a new request, sign into your employee account and choose <strong>New Reimbursement Request</strong> on the dashboard. Requests should be separated into the following 4 categories:
          <ul>
            <li>Travel (i.e. flight ticket or car rental)</li>
            <li>Lodging (i.e. hotel stay)</li>
            <li>Food (not including room service, which is covered under the hotel bill)</li>
            <li>Other (i.e. conference registration fees, office supplies, or parking expenses)</li>
          </ul>
        </p>
        <p>For example, a work assignment requiring a hotel and rental car could have two requests (one under Lodging and one under Travel).
          <p>Requests submitted with the "Other" category must include details of the expense in the comments section on submission.</p>
        </p>

        <h3>How does the request process work?</h3>
        <p>While on assignment, receipts for any expenses incurred should be submitted to your supervisor in your post-assignment packet. Once submitted, requests can be processed (approved or denied) by supervisors, or by HR directly. The dashboard has options for viewing both pending and completed requests.
        </p>
        <p className="small"><strong>NOTE: </strong><em>Compensation can only be requested for expenses that have a receipt.</em>
        </p>

        <h3>Why was my request denied?</h3>
        <p>Common reasons for denial are:
          <ul>
            <li>The work assignment is still in progress and not completed</li>
            <li>No receipt was submitted in the post-assignment packet for the requested expense</li>
            <li>The request was submitted under the wrong category</li>
          </ul>
          If none of these reasons apply, please email your direct supervisor.
        </p>

        <h3>What if I submit a request with the wrong amount?</h3>
        <p>You can submit another request right away, but be sure to include the erroneous request ID in the comments section of the new request.</p>

      </article>
    </>
  )
}



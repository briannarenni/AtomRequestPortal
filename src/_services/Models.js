export class User {
  constructor(userId, username, role, numPending, numSubmitted) {
    this.userId = userId;
    this.username = username;
    this.role = role;
    this.numPending = numPending;
    this.numSubmitted = numSubmitted;
  }
}

export class Ticket {
  constructor(ticketId, submittedOn, submittedBy, employeeName, amount, category, status) {
    this.ticketId = ticketId;
    this.submittedOn = submittedOn;
    this.submittedBy = submittedBy;
    this.employeeName = employeeName;
    this.amount = amount;
    this.category = category;
    this.status = status;
  }
}

// API Models
export class User {
  constructor(userId, username, fName, lName, role, numPending, numSubmitted) {
    this.userId = userId;
    this.username = username;
    this.firstName = fName;
    this.lastName = lName;
    this.role = role;
    this.numPending = numPending;
    this.numSubmitted = numSubmitted;
  }
}

export class Ticket {
  constructor(ticketId, submittedOn, submittedBy, employeeName, amount, category, status, comments) {
    this.ticketId = ticketId;
    this.submittedOn = submittedOn;
    this.submittedBy = submittedBy;
    this.employeeName = employeeName;
    this.amount = amount;
    this.category = category;
    this.status = status;
    this.comments = comments;
  }
}

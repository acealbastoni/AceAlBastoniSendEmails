function Trigger(){ 
  var index = getIndex_() - 1;
  var emails = AceAlBastoni.getEmailsOf('emails_2');
  console.log(emails.length);
  emails = AceAlBastoni.unique(emails)
  console.log(emails.length);
  var remainQuota = MailApp.getRemainingDailyQuota();
  console.log("Starting Index is  :  "+index);
  var counter = 0;
  while ((++index < emails.length) && (counter < remainQuota)) {
    let email = emails[index];
    let flag = send_(email);
    if ((flag > 0)) { console.log((index -1)+"  " +  email + " : sent"); counter++; }
    else { console.log(email + " : failed") }
    if (index === emails.length - 1) {
      setIndex_(0)
    }
    if (counter == remainQuota) {
      setIndex_(index);
    }
  }
}
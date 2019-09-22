// enable offline data
db.enablePersistence()
  .catch(function(err) {
    if (err.code == 'failed-precondition') {
      // probably multible tabs open at once
      console.log('persistance failed');
    } else if (err.code == 'unimplemented') {
      // lack of browser support for the feature
      console.log('persistance not available');
    }
  });

  const form = document.querySelector('form');
  form.addEventListener('submit', evt => {
      evt.preventDefault();

      const contactus = {
        firstname : form.firstname.value,
        lastname : form.lastname.value,
        email : form.email.value,
        phone : form.phone.value,
        subject : form.subject.value,
        message : form.message.value
      };
      db.collection('contact').add(contactus)
      .catch(err => Console.log(err));

      form.firstname.value = '';
      form.lastname.value = '';
      form.email.value = '';
      form.phone.value = '';
      form.subject.value = '';
      form.message.value = '';
  });
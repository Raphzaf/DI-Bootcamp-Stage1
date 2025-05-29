(function(children, partnerName, location, job) {
  const message = `You will be a ${job} in ${location}, and married to ${partnerName} with ${children} kids.`;
  const fortuneDiv = document.getElementById('fortune');
  fortuneDiv.textContent = message;
})(3, 'Alex', 'Tokyo', 'Software Engineer');

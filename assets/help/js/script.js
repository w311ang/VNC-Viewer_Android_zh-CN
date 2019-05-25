
function key(key, value) {
  var elements = document.getElementsByClassName(key);
  for(var i in elements) {
    elements[i].innerHTML = value;
  }
}

/*
 * This method hides entries rather than showing them as there appears to be
 * an issue with redrawing in the WebView on honeycomb which means that showing
 * hidden elements fails to cause a reflow.
 */
function type(type) {
  var hidetype = (type == 'tablet') ? 'handset' : 'tablet';
  var elements = document.getElementsByClassName(hidetype);
  for(var i in elements) {
    elements[i].style.display = 'none';
  }
}

function log(message) {
  var messageElement = document.createElement("p");
  var messageText = document.createTextNode(message);
  messageElement.appendChild(messageText);
  document.body.appendChild(messageElement);
}

function populateEmailTemplate(templateKeyValueMap) {
  var emailTemplateId = "email";
  var emailTemplateAttribute = "href";

  var emailTemplateElement = document.getElementById(emailTemplateId);
  var emailTemplate = emailTemplateElement.getAttribute(
    emailTemplateAttribute);

  var templateKey = "";
  var templateValue = "";

  for (templateKey in templateKeyValueMap) {

    templateValue = templateKeyValueMap[templateKey];

    templateKey = "{" + templateKey + "}";

    emailTemplate = emailTemplate.replace(templateKey, templateValue);

  };

  emailTemplateElement.setAttribute(emailTemplateAttribute, emailTemplate);
}


/*
 * Replace the contents of elements with classname matching 'key' with
 * the value 'value'.
 */
function populateKey(key, value) {
  var elements = document.getElementsByClassName(key);
  for(var i in elements) {
    elements[i].innerHTML = value;
  }
}


/*
 * WebView doesn't appear to be very good at redrawing itself when we have
 * updated the page using javascript.  We force a redraw by explicitly changing
 * the background colour of the page.
 */
function forceReload() {
  document.body.style.background = 'white';
}
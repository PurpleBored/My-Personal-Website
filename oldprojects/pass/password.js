function generatePassword() {
  let length = document.querySelector('[name=length]').value;
  let includeNumbers = document.querySelector('[name=numbers]').checked;
  let includeLowerCase = document.querySelector('[name=lowercase]').checked;
  let includeUpperCase = document.querySelector('[name=uppercase]').checked;
  let includeSpecialChars = document.querySelector('[name=specialChars]').checked;

  let result = '';
  let chars = '';

  if (includeNumbers) {
    chars += '0123456789';
  }
  if (includeLowerCase) {
    chars += 'abcdefghijklmnopqrstuvwxyz';
  }
  if (includeUpperCase) {
    chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }
  if (includeSpecialChars) {
    chars += '!@#$%^&*()_+~`|}{[]:;?><,./-=';
  }

  if (chars.length === 0) {
    alert('Please select at least one type of character to include.');
    return;
  }

  result += '\n';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  document.getElementById('password-container').style.display = 'block';
  document.getElementById('password').textContent = result;
}

function copyToClipboard() {
  let password = document.getElementById('password').textContent.trim();
  let input = document.createElement('textarea');
  input.style.position = 'fixed';
  input.style.opacity = 0;
  input.value = password.match(/[^\r\n]+\r?\n?\r?/gm).pop().trim();
  document.body.appendChild(input);
  input.select();
  document.execCommand('copy');
  document.body.removeChild(input);

  clearCheckmarks();
  alert('Password copied to clipboard!');
}

function clearCheckmarks() {
  let password = document.getElementById('password');
  let text = password.textContent.trim().split('\n');
  text.pop();
  password.textContent = text.join('\n');
}

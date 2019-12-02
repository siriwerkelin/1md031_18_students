
function formInfo() {
  var name = document.getElementById('namn').value;
  var email = document.getElementById('email').value;
  var betalning = document.getElementById('betalning').value;
  var kön = document.querySelector('input[name="kön"]:checked').value;
  infoArray = [name, email, betalning, kön];
  return infoArray
}

function ifchecked() {
  var items = document.getElementsByName('orderburger');
  var selectedItems = [];
  for (var i = 0; i < items.length; i++) {
    if (items[i].checked)
      selectedItems.push(items[i].value);
      }
    return selectedItems
  }

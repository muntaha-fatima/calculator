function clearDisplay() {
    document.getElementById('display').value = '';
  }
  
  function deleteLast() {
    var display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
  }
  
  function appendToDisplay(value) {
    document.getElementById('display').value += value;
  }
  
  function calculateResult() {
    var display = document.getElementById('display');
    try {
      display.value = eval(display.value);
    } catch (e) {
      display.value = 'Error';
    }
  }
  
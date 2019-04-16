function debounce(func, delay, immediate) {
  let timer = null;
  return () => {
    let context = this;
    if (timer) {
      return;
    }
    timer = setTimeout(() => {
      func.apply(context, arguments);
      timer = null;
    }, delay);
    if (immediate) {
      func.apply(context, arguments);
      immediate = false;
    }
  }
}

function request() {
  console.log(new Date());
}


let func = debounce(request, 1000, true);

func();
func();
func();

setTimeout(() => {
  func();
}, 2000);

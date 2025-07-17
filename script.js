document.addEventListener('DOMContentLoaded', function() {
  const typedTextSpan = document.querySelector('.typed-text');
  const cursorSpan = document.querySelector('.cursor');

  const text = "Me chamo Carlos Henrique, sou um desenvolvedor web com foco em BackEnd e ênfase em PHP, nascido em Curitiba, Paraná.";
  const typingDelay = 100;
  let charIndex = 0;

  function type() {
    if (charIndex < text.length) {
      if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
      typedTextSpan.textContent += text.charAt(charIndex);
      charIndex++;
      setTimeout(type, typingDelay);
    } else {
      cursorSpan.classList.remove("typing");
     
    }
  }

  if(typedTextSpan && cursorSpan) type();
});

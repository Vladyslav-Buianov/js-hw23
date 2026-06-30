const imagesRef = document.querySelectorAll(".images__img");
// дістаємо доступ до фотків

if (imagesRef.src = "") {
    imagesRef.style.height = "200px";
    imagesRef.style.backgroundColor = "#f0f0f0";
}// Якщо фотка ще не заределася то у ней такі стилі

const imagesObserver = new IntersectionObserver((entries, observer)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.src = entry.target.dataset.src;
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
        }// якщо фотка в полі зору то втавляємо src з дата-атрибута, додаєм анімації і перестаємо дивитися за нею.
    })
}, {rootMargin: "40px" 
// тут написана довжина від фотки у якій вона буде в полі зору
})

imagesRef.forEach(images => {
    imagesObserver.observe(images)
})
// дивимось за кожною фоткою
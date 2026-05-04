'use strict';

const nextIndex = (current, total, direction) =>
        (current + direction + total) % total;

const mergeConfig = (userConfig, defaults) => ({ ...defaults, ...userConfig });

const buildSlideHTML = slide => `
  <div class="slide" style="background:${slide.bg || '#1a1a2e'}">
    ${slide.img ? `<img src="${slide.img}" alt="${slide.title || ''}" loading="lazy" />` : ''}
    <div class="slide-content">
      ${slide.title ? `<h2 class="slide-title">${slide.title}</h2>` : ''}
      ${slide.desc  ? `<p  class="slide-desc">${slide.desc}</p>`   : ''}
    </div>
  </div>`;

function initSlider(containerId, userConfig = {}) {

    const DEFAULTS = {
        slides:         [],
        duration:       400,
        autoplay:       false,
        autoplayDelay:  3000,
        showArrows:     true,
        showDots:       true,
        showPagination: true,
        startIndex:     0,
    };

    const config = mergeConfig(userConfig, DEFAULTS);

    if (config.slides.length === 0) {
        console.warn(`initSlider: slides array is empty for #${containerId}`);
        return;
    }

    let state = {
        current:      config.startIndex,
        total:        config.slides.length,
        autoplayTimer: null,
        isAnimating:  false,
    };

    const container = document.getElementById(containerId);
    if (!container) {
        console.warn(`initSlider: container #${containerId} not found`);
        return;
    }

    container.innerHTML = `
    <div class="slider-viewport">
      <div class="slider-track" id="${containerId}-track">
        ${config.slides.map(buildSlideHTML).join('')}
      </div>
    </div>
    ${config.showArrows ? `
      <button class="slider-arrow prev" id="${containerId}-prev" aria-label="Попередній">&#8249;</button>
      <button class="slider-arrow next" id="${containerId}-next" aria-label="Наступний">&#8250;</button>
    ` : ''}
    ${config.showDots ? `
      <div class="slider-dots" id="${containerId}-dots">
        ${config.slides.map((_, i) => `
          <button class="slider-dot ${i === state.current ? 'active' : ''}"
                  aria-label="Слайд ${i+1}"
                  data-index="${i}">
          </button>`).join('')}
      </div>
    ` : ''}
    ${config.showPagination ? `
      <div class="slider-pagination" id="${containerId}-pagination">
        ${state.current + 1} / ${state.total}
      </div>
    ` : ''}`;

    const track      = document.getElementById(`${containerId}-track`);
    const dotsEl     = document.getElementById(`${containerId}-dots`);
    const pagination = document.getElementById(`${containerId}-pagination`);
    const btnPrev    = document.getElementById(`${containerId}-prev`);
    const btnNext    = document.getElementById(`${containerId}-next`);


    track.style.transition = `transform ${config.duration}ms cubic-bezier(.4,0,.2,1)`;

    function renderSlider() {
        track.style.transform = `translateX(-${state.current * 100}%)`;

        if (dotsEl) {
            dotsEl.querySelectorAll('.slider-dot').forEach((dot, i) => {
                dot.classList.toggle('active', i === state.current);
            });
        }

        if (pagination) {
            pagination.textContent = `${state.current + 1} / ${state.total}`;
        }
    }

    function goTo(index) {
        if (state.isAnimating) return;
        if (index === state.current) return;

        state = { ...state, current: index, isAnimating: true };
        renderSlider();

        setTimeout(() => {
            state = { ...state, isAnimating: false };
        }, config.duration);
    }

    const goNext = () => goTo(nextIndex(state.current, state.total,  1));
    const goPrev = () => goTo(nextIndex(state.current, state.total, -1));


    function startAutoplay() {
        if (!config.autoplay) return;
        stopAutoplay(); // скидаємо попередній якщо є
        const timer = setInterval(goNext, config.autoplayDelay);
        state = { ...state, autoplayTimer: timer };
    }

    function stopAutoplay() {
        if (state.autoplayTimer) {
            clearInterval(state.autoplayTimer);
            state = { ...state, autoplayTimer: null };
        }
    }


    if (btnPrev) btnPrev.addEventListener('click', goPrev);
    if (btnNext) btnNext.addEventListener('click', goNext);

    if (dotsEl) {
        dotsEl.addEventListener('click', e => {
            const dot = e.target.closest('.slider-dot');
            if (!dot) return;
            goTo(parseInt(dot.dataset.index));
        });
    }

    let isVisible = false;
    const observer = new IntersectionObserver(
            entries => { isVisible = entries[0].isIntersecting; },
            { threshold: 0.5 }
    );
    observer.observe(container);

    document.addEventListener('keydown', e => {
        if (!isVisible) return;
        if (e.key === 'ArrowLeft')  { goPrev(); resetAutoplay(); }
        if (e.key === 'ArrowRight') { goNext(); resetAutoplay(); }
    });

    container.addEventListener('mouseenter', stopAutoplay);
    container.addEventListener('mouseleave', startAutoplay);

    let touchStartX = 0;

    container.addEventListener('touchstart', e => {
        touchStartX = e.touches[0].clientX;
    }, { passive: true });

    container.addEventListener('touchend', e => {
        const diff = touchStartX - e.changedTouches[0].clientX;
        if (Math.abs(diff) < 50) return; // ігноруємо короткі свайпи
        if (diff > 0) goNext(); else goPrev();
        resetAutoplay();
    }, { passive: true });

    const resetAutoplay = () => {
        stopAutoplay();
        startAutoplay();
    };

    renderSlider();
    startAutoplay();

    function destroy() {
        stopAutoplay();
        observer.disconnect();
        container.innerHTML = '';
    }

    return { goTo, goNext, goPrev, destroy };
}


initSlider('slider-1', {
    duration:       500,
    autoplay:       true,
    autoplayDelay:  3000,
    showArrows:     true,
    showDots:       true,
    showPagination: true,
    slides: [
        {
            img:   'https://ms.detector.media/doc/images/news/19533/i75_ArticleImage_19533.jpg?w=900',
            title: 'Вихід україни з під червоної напасті',
            desc:  '1991 рік - початок нової ери для нашої країни',
        },
        {
            img:   'https://img.tsn.ua/cached/914/tsn-26b8a2e2ec36ec81b4b09ef9e3445ef0/thumbs/1200x630/13/6b/5684179e5dbd647cfc324837f2f86b13.jpg',
            title: 'внесання прапору до верховної ради',
            desc:  'Чорновіл Вячеслав - символ боротьби за незалежність',
        },
        {
            img:   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl0fz4Aj3TwWKamybga2YkAxcZOtEkC5jVEQ&s',
            title: 'Заснування ЗСУ',
            desc:  '1996 рік - створення української армії для захисту суверенітету',
        },
        {
            img:   'https://glavcom.ua/img/article/10202/21_main-v1726155800.webp',
            title: 'Наш бджоловод потужно починає революцію',
            desc:  '2004 рік - Помаранчева революція змінює політичний ландшафт країни',
        },
        {
            img:   'https://fs09.vseosvita.ua/0901ogvw-51bb-1200x630.jpg',
            title: '',
            desc:  '2013-2014 роки - цвіт нації виходить на Майдан, вимагаючи змін та європейського майбутнього',
        },
    ],
});

initSlider('slider-2', {
    duration:       300,
    autoplay:       false,
    showArrows:     true,
    showDots:       true,
    showPagination: false,
    slides: [
        {
            img:   'https://telegraf.com.ua/static/storage/originals/9/e5/0e478b1f90e495cc456719f46960de59.jpg',
            title: ' ',
            desc:  'його україна виростила викормила, а він в росію скаче',
        },
        {
            img:   'https://antikor.info/foto/articles_foto/2015/12/16/77948.jpg?20000101000000',
            title: 'Юлька юлічка',
            desc:  '',
        },
        {
            img:   'https://24tv.ua/resources/photos/news/202508/2886262.jpg?v=1754320632000',
            title: '',
            desc:  'Бджоловод на говерлі',
        },
        {
            img:   'https://funny.klev.club/smeh/uploads/posts/2024-05/funny-klev-club-aes6-p-smeshnie-kartinki-lyashko-25.jpg' ,
            title: '',
            desc:  '',
        },
    ],
});
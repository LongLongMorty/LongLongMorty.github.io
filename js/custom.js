/* ========================================
   自定义交互效果 - Custom Interactions
   ======================================== */

(function() {
  'use strict';

  // 1. 平滑滚动效果
  function smoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }

  // 2. 文章卡片进入动画
  function cardAnimation() {
    const cards = document.querySelectorAll('.post-item, .card-widget');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    cards.forEach(card => observer.observe(card));
  }

  // 3. 返回顶部按钮增强
  function enhanceScrollToTop() {
    const scrollBtn = document.querySelector('#scroll-top');
    if (scrollBtn) {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
          scrollBtn.style.opacity = '1';
          scrollBtn.style.pointerEvents = 'auto';
        } else {
          scrollBtn.style.opacity = '0';
          scrollBtn.style.pointerEvents = 'none';
        }
      });
    }
  }

  // 4. 图片懒加载优化
  function optimizeImages() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      img.addEventListener('load', function() {
        this.style.animation = 'fadeIn 0.4s ease';
      });
    });
  }

  // 5. 代码块复制按钮增强
  function enhanceCopyButton() {
    const codeBlocks = document.querySelectorAll('pre');
    codeBlocks.forEach(block => {
      const copyBtn = block.querySelector('.copy-btn');
      if (copyBtn) {
        copyBtn.addEventListener('click', function() {
          this.textContent = '已复制!';
          setTimeout(() => {
            this.textContent = '复制';
          }, 2000);
        });
      }
    });
  }

  // 6. 链接悬停效果
  function enhanceLinks() {
    const links = document.querySelectorAll('a:not(.no-hover)');
    links.forEach(link => {
      link.addEventListener('mouseenter', function() {
        this.style.transform = 'translateX(2px)';
      });
      link.addEventListener('mouseleave', function() {
        this.style.transform = 'translateX(0)';
      });
    });
  }

  // 7. 页面加载完成动画
  function pageLoadAnimation() {
    document.body.style.opacity = '0';
    window.addEventListener('load', () => {
      document.body.style.transition = 'opacity 0.5s ease';
      document.body.style.opacity = '1';
    });
  }

  // 8. 初始化所有效果
  function init() {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        smoothScroll();
        cardAnimation();
        enhanceScrollToTop();
        optimizeImages();
        enhanceCopyButton();
        enhanceLinks();
      });
    } else {
      smoothScroll();
      cardAnimation();
      enhanceScrollToTop();
      optimizeImages();
      enhanceCopyButton();
      enhanceLinks();
    }
  }

  init();
})();

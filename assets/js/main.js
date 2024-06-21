AOS.init();

// header
$(document).ready(function(){
    var timer;
    $('#sri-header .left-header li').hover(function(){
        clearTimeout(timer);
        $('.navi-total').css('display', 'block');
    }, function(){
        timer = setTimeout(function(){
            $('.navi-total').css('display', 'none');
        },500);
    });

    $('#sri-index').hover(function(){
        clearTimeout(timer);
    }, function(){
        timer = setTimeout(function(){
            $('.navi-total').css('display', 'none');
        },100);
    });
});

// 햄버거메뉴
$(document).ready(function(){
    var timer;

    $('.header-ham').click(function(){
        $('.sitemap-modal').fadeIn('fast');
        $('#sri-header').fadeOut('fast');
    });

    $(".hamClose").on("click", function () {
        $('.sitemap-modal').fadeOut('fast');
        $('#sri-header').fadeIn('fast');
      });
});


// 별 이미지
function toggleStar(star) {
    var emptyStar = star.querySelector('.empty-star');
    var filledStar = star.querySelector('.filled-star');
  
    if (emptyStar.style.display === 'none') {
      emptyStar.style.display = 'inline-block';
      filledStar.style.display = 'none';
    } else {
      emptyStar.style.display = 'none';
      filledStar.style.display = 'inline-block';
    }
}

// 하트 이미지
function toggleHeart(heart) {
    var emptyHeart = heart.querySelector('.empty-heart');
    var filledHeart = heart.querySelector('.filled-heart');
  
    if (emptyHeart.style.display === 'none') {
        emptyHeart.style.display = 'inline-block';
        filledHeart.style.display = 'none';
    } else {
        emptyHeart.style.display = 'none';
        filledHeart.style.display = 'inline-block';
    }
}

// selectbox
// 선택 상자 토글 및 선택 항목 처리
const selectBoxes = document.querySelectorAll('.selectBox2');

selectBoxes.forEach(selectBox => {
    const label = selectBox.querySelector('.label');
    const optionList = selectBox.querySelector('.optionList');
    const optionItems = selectBox.querySelectorAll('.optionItem');

    label.addEventListener('click', () => {
        if (selectBox.classList.contains('active')) {
            selectBox.classList.remove('active');
        } else {
            // 모든 선택 상자들을 비활성화
            selectBoxes.forEach(box => {
                box.classList.remove('active');
            });
            selectBox.classList.add('active');
        }
    });

    optionItems.forEach(item => {
        item.addEventListener('click', () => {
            label.textContent = item.textContent;
            selectBox.classList.remove('active');
        });
    });
});

// 탭
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.querySelectorAll('.tabcontent');
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = 'none';
    }
    tablinks = document.querySelectorAll('.tablinks');
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove('active');
    }
    document.getElementById(tabName).style.display = 'block';
    evt.currentTarget.classList.add('active');
    }

    // 기본으로 첫 번째 탭을 열도록 설정
    document.getElementById('defaultOpen').click();


 // 모달 열기
 var modalBtns = document.querySelectorAll('.openModalBtn');
 modalBtns.forEach(function(btn) {
   btn.addEventListener('click', function() {
     var modalId = btn.getAttribute('data-modal');
     closeAllModals(); // 모든 모달 창 닫기
     document.getElementById(modalId).style.display = 'block'; // 클릭된 버튼에 해당하는 모달 창 열기
   });
 });

 // 모든 모달 창 닫기
 function closeAllModals() {
   var modals = document.querySelectorAll('.modal-background');
   modals.forEach(function(modal) {
     modal.style.display = 'none';
   });
 }

 // 모달 닫기
 function closeModal(modalId) {
   document.getElementById(modalId).style.display = 'none';
 }


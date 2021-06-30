<template>
  <section class="pe-lg-7 bg-white overflow-hidden pb-5 pb-sm-0">
    <div
      class="text-white pt-7 ps-lg-7 ps-sm-5 ps-2 pb-2 pb-sm-0 bgSet"
      :style="{
        'background-image': 'url(' + require('../../../assets/images/bg-02.jpg') + ')',
        'border-radius': '0 24px 0 0',
      }"
    >
      <h4 class="mb-2">선정 계속 4 개의 매력</h4>
      <h2 class="mb-5 d-flex">
        <i
          class="fas fa-exclamation mr-3"
          style="animation-delay: calc(1s * 0.1);"
          data-aos="animate__rotateInDownLeft"
        ></i>
        <span style="animation-delay: calc(1s * 0.2);" data-aos="animate__rotateInDownLeft">L</span>
        <span style="animation-delay: calc(1s * 0.3);" data-aos="animate__rotateInDownLeft">U</span>
        <span style="animation-delay: calc(1s * 0.4);" data-aos="animate__rotateInDownLeft">L</span>
        <span style="animation-delay: calc(1s * 0.5);" data-aos="animate__rotateInDownLeft">U</span>
        <span style="animation-delay: calc(1s * 0.6);" data-aos="animate__rotateInDownLeft"
          >ㅅ</span
        >
        <span style="animation-delay: calc(1s * 0.7);" data-aos="animate__rotateInDownLeft"
          >て</span
        >
        <span style="animation-delay: calc(1s * 0.8);" data-aos="animate__rotateInDownLeft"
          >등</span
        >
        <span style="animation-delay: calc(1s * 0.9);" data-aos="animate__rotateInDownLeft"
          >응</span
        >
        <span style="animation-delay: calc(1s * 1);" data-aos="animate__rotateInDownLeft">마</span>
        <span style="animation-delay: calc(1s * 1.1);" data-aos="animate__rotateInDownLeft"
          >라</span
        >
        <span style="animation-delay: calc(1s * 1.2);" data-aos="animate__rotateInDownLeft"
          >코</span
        >
        <span style="animation-delay: calc(1s * 1.3);" data-aos="animate__rotateInDownLeft"
          >？</span
        >
      </h2>
      <div>
        <div
          class="py-8 d-block text-dark text-decoration-none bgSet advantageBox"
          :style="{
            'background-image': 'url(' + require('../../../assets/images/charm-01.jpg') + ')',
          }"
        >
          <div class="position-relative text-white">
            <div class="ps-sm-7 p-2 flexPostion col-lg-3 col-sm-6">
              <h5 class="mb-1 ps-3 fw-bolder">스스로 움직이는 힘을 몸에 익힌다</h5>
              <h3 class="mb-2"># 취업에 강한</h3>
              <p class="mb-4 h6">
                본교에서는 취직 활동하는 장면에서 가장 중요한 '스스로 움직이는 힘 "을 최대한 발휘할
                수 있도록 1 년차부터 교양 수업이나 면접 연습, 이력서 작성 등을 철저하게지도하고 취직
                내정을 향해 전력으로 지원하고 있습니다.
              </p>
            </div>
          </div>
        </div>
        <div
          class="py-8 d-block text-dark text-decoration-none bgSet advantageBox"
          :style="{
            'background-image': 'url(' + require('../../../assets/images/charm-02.jpg') + ')',
          }"
        >
          <div class="position-relative">
            <div class="ps-sm-7 p-2 flexPostion col-lg-3 col-sm-6 text-white">
              <h5 class="mb-1 ps-3">철저한 예절 교육을 실천</h5>
              <h3 class="mb-2"># 충실한 커리큘럼</h3>
              <p class="mb-4 h6">
                비즈니스 계열학과뿐만 아니라 모든학과에서 비즈니스 매너의 수업을 실시하고 있습니다.
                취업 활동뿐만 아니라 일의 현장에서도 개인 일상에서도 유용 일생 물건의 기술로
                실천으로 배워갑니다.
              </p>
            </div>
          </div>
        </div>
        <div
          class="py-8 d-block bg-white text-dark text-decoration-none bgSet advantageBox"
          :style="{
            'background-image': 'url(' + require('../../../assets/images/charm-03.jpg') + ')',
          }"
        >
          <div class="position-relative">
            <div class="ps-sm-7 p-2 flexPostion col-lg-3 col-sm-6 text-white">
              <h5 class="mb-1 ps-3">담임제로 강사와의 거리가 가까운</h5>
              <h3 class="mb-2"># 강사가 매력적</h3>
              <p class="mb-4 h6">
                교내 곳곳에서 볼 수있는 강사와 학생의 커뮤니케이션. 본교는 담임제로 학교 생활의
                고민과 취업에 관한 것도 부담없이 상담 할 수있는 환경이 있기 때문에, 학생 개개인의
                개성을 소중히하면서 늘릴 수 있습니다.
              </p>
            </div>
          </div>
        </div>
        <div
          class="py-8 d-block bg-white text-dark text-decoration-none bgSet advantageBox"
          :style="{
            'background-image': 'url(' + require('../../../assets/images/charm-01.jpg') + ')',
          }"
        >
          <div class="position-relative">
            <div class="ps-sm-7 p-2 flexPostion col-lg-3 col-sm-6 text-white">
              <h5 class="mb-1 ps-3">다양한 자격 취득 가능</h5>
              <h3 class="mb-2"># 높은 자격 취득율</h3>
              <p class="mb-4 h6">
                본교 학생들은 재학 중에 수많은 자격을 취득합니다. 그것은 자신이 배우는 전문 분야의
                자격뿐만 아니라 다른학과의 자격에도 의욕적으로 도전하고 있기 때문입니다.
                본교에서는학과의 울타리를 넘은 백업 체제를 갖추고 있습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

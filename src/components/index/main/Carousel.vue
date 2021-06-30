<template>
  <section id="marquee">
    <div class="view bg-white">
      <div class="pic-container">
        <div class="picCour">
          <img src="https://picsum.photos/300/300?random=10" alt="" />
        </div>
        <div class="picCour">
          <img src="https://picsum.photos/300/300?random=20" class="p-1" alt="" />
        </div>
        <div class="picCour">
          <img src="https://picsum.photos/300/300?random=30" alt="" />
        </div>
        <div class="picCour">
          <img src="https://picsum.photos/300/300?random=40" alt="" />
        </div>
        <div class="picCour">
          <section class="d-flex justify-content-between mb-3 px-7">
            <div
              class="detailBox rounded"
              :style="{
                'background-image': 'url(' + require('../../../assets/images/header-01.jpg') + ')',
              }"
            ></div>
            <div class="d-flex flex-column justify-content-between w-50">
              <div
                class="detailBox2 rounded"
                :style="{
                  'background-image':
                    'url(' + require('../../../assets/images/header-02.jpg') + ')',
                }"
              ></div>
              <div class="d-flex justify-content-between w-100">
                <div
                  class="detailBox3 rounded w-50"
                  :style="{
                    'background-image':
                      'url(' + require('../../../assets/images/header-03.jpg') + ')',
                  }"
                ></div>
                <div class="d-flex flex-column justify-content-between w-49">
                  <div
                    class="detailBox4 rounded"
                    :style="{
                      'background-image':
                        'url(' + require('../../../assets/images/header-04.jpg') + ')',
                    }"
                  ></div>
                  <button type="button" class="text-center btn btn-dark py-2">加入購物車</button>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div class="picCour">
          <img src="https://picsum.photos/300/300?random=10" alt="" />
        </div>
        <div class="picCour">
          <img src="https://picsum.photos/300/300?random=20" alt="" />
        </div>
        <div class="picCour">
          <img src="https://picsum.photos/300/300?random=30" alt="" />
        </div>
        <div class="picCour">
          <img src="https://picsum.photos/300/300?random=40" alt="" />
        </div>
        <div class="picCour">
          <img src="https://picsum.photos/300/300?random=50" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>

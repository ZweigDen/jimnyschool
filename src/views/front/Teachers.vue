<template>
  <section class="p-7">
    <p class="h1 d-flex">
      <span style="animation-delay: calc(1s * 0.1);" data-aos="animate__rotateInDownLeft"
        ><i class="fas fa-exclamation mr-3"></i></span
      ><span style="animation-delay: calc(1s * 0.2);" data-aos="animate__rotateInDownLeft">師</span
      ><span style="animation-delay: calc(1s * 0.3);" data-aos="animate__rotateInDownLeft">資</span
      ><span style="animation-delay: calc(1s * 0.4);" data-aos="animate__rotateInDownLeft">介</span
      ><span style="animation-delay: calc(1s * 0.5);" data-aos="animate__rotateInDownLeft">紹</span
      ><span style="animation-delay: calc(1s * 0.6);" data-aos="animate__rotateInDownLeft">。</span>
    </p>
  </section>
  <!-- bg -->
  <section
    class="productHeader mb-7"
    :style="{ 'background-image': 'url(' + require('../../assets/images/teachers-01.jpg') + ')' }"
  ></section>
  <!-- 教育方針 -->
  <section class="text-center container mb-7">
    <div class="row flex-column align-items-center">
      <div class="col mb-3">
        <h3 class="mb-4">時代を生き抜く</h3>
      </div>
      <div class="col mb-6">
        <h2>「高い専門性」と「豊かな人間力」<span class="h3">の育成を</span></h2>
      </div>
      <div class="col">
        <h5 class="mb-2">本校の校訓である「進取」「明朗」「誠実」を根幹におき、</h5>
        <h5 class="mb-2">理事長、校長を中心とした指導体制のもと、スローガンに</h5>
        <h5 class="mb-2">時代を生き抜く「高い専門性」と「豊かな人間力」の育成を掲げ、</h5>
        <h5 class="mb-2">全教職員が一丸となって、日々の一つひとつの教育活動を着実に実践し、</h5>
        <h5 class="mb-2">常に先を見通す論理性や人間の機微がわかる感性を養い、</h5>
        <h5 class="mb-2">総合力に富む真の意味で社会に貢献できる人材の育成を行います。</h5>
      </div>
    </div>
  </section>
  <!-- 教師列表 -->
  <section class="p-7">
    <div class="row row-cols-1 row-cols-md-2 g-4">
      <div class="col">
        <div class="card h-100 border-0">
          <img src="../../assets/images/teacher-01.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">校長</h5>
            <p class="card-text">「どうして？」「うーん」「なんで？」「こうかな」「いけるか？」…
              プログラミング時の学生の声です。このあと「よしっ！」「きたー！」「おっしゃー！」の声が出れば
              OKです。自分で試行錯誤しながら完成の喜びを感じてください。爽快ですよ！「あれっ？」「あれっ？
              」と言っているだけだとダメです。</p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100 border-0">
          <img src="../../assets/images/teacher-02.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">主任</h5>
            <p class="card-text">
              人間は単に教えてもらったことは、時間の経過とともに忘れてしま
              いがちです。でも、自分で考えてやり遂げたことは記憶として残り、それが人生を生き
              抜く本当の力となると思います。みなさん、DENBIで熱中する何かを一緒に見つけましょう。そし
              て、成し遂げたという自信を得て、社会で活躍していただきたいです。
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

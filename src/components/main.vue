<script>
export default {};
</script>

<template>
  <div
    class="grid justify-items-center items-center bg-customColor text-white sticky top-0 z-10 min-h-screen"
  >
    <div
      class="flex flex-col w-340 h-600 rounded-xl overflow-hidden sm:w-600 sm:h-450 sm:flex-row"
    >
      <div
        class="w-1/2 h-full max-sm:w-full max-sm:h-[240px] max-sm:hover:h-full duration-300 ease-in-out flex items-center"
      >
        <img src="../../public/images/image-product-desktop.jpg" alt="" />
      </div>
      <!-- text -->
      <div
        class="w-1/2 bg-white text-black h-full p-8 max-sm:w-full max-sm:p-5"
      >
        <div
          class="font-sans tracking-[.60em] text-xs mb-5 text-slate-400 font-semibold max-sm:mb-2"
        >
          PERFUME
        </div>
        <div
          class="font-fraunces mb-7 text-[34px] leading-[2rem] font-semibold max-sm:mb-4"
        >
          Gabrielle Essence Eau De Parfum
        </div>
        <div
          class="font-sans text-[14px] text-slate-400 leading-[1.4rem] font-semibold"
        >
          A floreal, solar and voluptuos interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL
        </div>
        <!-- price -->
        <div class="flex items-center mt-5 max-sm:mt-3">
          <div
            class="w-1/2 text-darkCyan font-fraunces font-semibold text-[32px]"
          >
            &dollar;149.99
          </div>
          <div class="ms-7 text-slate-400 font-medium line-through">
            &dollar;169.99
          </div>
        </div>
        <!-- cart -->
        <div>
          <div
            class="bg-darkCyan rounded-md h-12 mt-5 flex items-center justify-center text-white hover:bg-darkCyanHover ease-in duration-150 cursor-pointer"
          >
            <i class="fa-solid fa-cart-shopping me-3"></i>
            <span class="font-medium text-sm"> Add to Cart </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>

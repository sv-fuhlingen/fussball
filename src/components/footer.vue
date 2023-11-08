<script setup lang="ts">

const navigationFooter = {
  social: [
    {

    },
  ],
}

const year = new Date().getFullYear()
</script>

<template>


  <footer class="bg-black" aria-labelledby="footer-heading">
    <h2 id="footer-heading" class="sr-only">Footer</h2>
    <div class="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-12 lg:px-8 mt-12">
      <div class="grid lg:grid-cols-4 gap-6">

        <div class="mt-8 pt-4 xl:mt-0 text-gray-200 text-base">
          <h3 class="text-base font-medium text-white ">Vorstand</h3>

          <p class="mt-4 text-gray-400">Michael Schiechel (Vorsitz)</p>
          <p class="mt-1 text-gray-400">Martina Weitz (stv. Vorsitz)</p>

          <p class="mt-4">Geschäftsadresse:</p>

          <p class="mt-1 text-gray-400">Kasseler Weg 91</p>
          <p class="mt-1 text-gray-400">50769 Köln</p>

          <p class="mt-4">Fußballplatz:</p>
          <p class="mt-1 text-gray-400">Am Kutzpfädchen 3a</p>
          <p class="mt-1 text-gray-400">50769 Köln</p>

        </div>

        <div class="mt-8 pt-4 xl:mt-0 text-gray-200 text-base lg:border-none border-t border-gray-700">
          <h3 class="text-base font-medium text-white">Geschäftszeiten</h3>
          <p class="mt-4 text-gray-400">Sie finden uns auf dem Fühlinger Sportplatz zu folgenden Zeiten:</p>
          <p class="mt-4">Donnerstag: 17-19 Uhr</p>
        </div>

        <div class="mt-8 pt-4 xl:mt-0 text-gray-200 text-base lg:border-none border-t border-gray-700">
          <h3 class="text-base font-medium text-white">Über uns</h3>
          <p class="mt-4 text-gray-400">Der SV Fühlingen-Chorweiler 1929/77 e. V. ist einer der großen und etablierten
            Vereine im Kölner Norden.</p>
          <p class="mt-4 text-gray-400">Seit mehr als 90 Jahren aktiv in Köln, bieten wir ein zeitgemäßes Sportangebot
            an.</p>
        </div>
        <div class="mt-8 pt-4 xl:mt-0 text-gray-200 text-base lg:border-none border-t border-gray-700">
          <h3 class="text-base font-medium text-white">Information</h3>
          <p class="mt-4 text-gray-400">Landessportbund:</p>
          <p>LSB-Nr. 200 3012</p>

          <p class="mt-4 text-gray-400">Vereinsregister Köln:</p>
          <p>VR 6253</p>

          <p class="mt-4 text-gray-400">Steuer-Nr.:</p>
          <p>217/5962/0600</p>

          <p class="mt-4 text-gray-400">Bankverbindung:</p>
          <p class="pb-2.5">Volksbank Rhein-Erft-Köln eG</p>
          <p class="pb-0.5">DE69 3706 2365 4419 1070 13</p>
          <p>BIC: GENODED1FHH</p>
        </div>
      </div>
      <div class="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
        <div class="flex space-x-6 md:order-2">
          <a v-for="item in navigationFooter.social" :key="item.name" :href="item.href"
             class="text-gray-400 hover:text-gray-300">
            <span class="sr-only">{{ item.name }}</span>
            <component :is="item.icon" class="h-6 w-6" aria-hidden="true"/>
          </a>
          <a href="#" class="text-gray-400 hover:text-gray-300">
            Datenschutzerklärung
          </a>
          <a href="#" class="text-gray-400 hover:text-gray-300">
            Impressum
          </a>
        </div>
        <p class="mt-8 text-base text-gray-400 md:order-1 md:mt-0">&copy; {{ year }} <span
            class="pl-1.5 text-yellow-400">SV Fühlingen-Chorweiler 1929/77 e. V.</span></p>
      </div>
    </div>
  </footer>

</template>

<style scoped>

</style>

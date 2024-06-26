<script setup lang="ts">
import {Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems} from '@headlessui/vue'
import {Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/vue/24/outline'

const props = defineProps({
  url: {
    type: String,
    default: ''
  },
  teams: {
    type: Array,
    default: []
  }
});

const navigationFooter = {
  social: [
    {

    },
  ],
}


let teamsInfo = [];

props.teams.map((team) => (
    teamsInfo.push({name: team.attributes.name, href: '/team/' + team.attributes.ident})
))


const navigation = [
  {
    name: 'Teams', href: '#', current: false, data: teamsInfo
  },
  {name: 'Probetraining', href: '/probetraning', current: false},
  {
    name: 'Mitgliedschaft', href: '#', current: false, data: [
      {name: 'Anmeldung', href: '/anmeldung'},
      {name: 'Abmeldung', href: '/abmeldung'},
    ]
  },
]

for (const item of navigation) {
  if (item.href === props.url) {
    item.current = true
  }
  if(item.data) {
    for (const subitem of item.data) {
      if (subitem.href === props.url) {
        subitem.current = true
        item.current = true
      }
    }
  }
}


</script>
<template>
<Disclosure as="nav" class="bg-black" v-slot="{ open }">

<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
  <div class="flex h-16 items-center justify-between">
    <div class="flex items-center">
      <div class="flex-shrink-5 ">
        <a href="/">
          <img class="w-12 mt-6" src="/img/logo.png" alt="SV Fühlingen Logo">
        </a>
      </div>
      <div class="hidden lg:block">
        <div class="ml-12 flex items-baseline space-x-4">
          <div v-for="item in navigation">
            <a v-if="!item.data" :href="item.href"
               :class="[item.current ? 'text-yellow-400' : 'text-gray-100 hover:bg-yellow-500 hover:text-black', 'px-3 py-2 rounded-md text-sm font-medium']"
               :aria-current="item.current ? 'page' : undefined">
              {{ item.name }}
            </a>
            <Menu as="div" v-if="item.data" class="relative inline-block text-left">
              <div>
                <MenuButton
                    :class="[item.current ? 'text-yellow-400' : 'text-gray-100 hover:bg-yellow-500 hover:text-black', 'px-3 py-2 rounded-md text-sm font-medium']"
                    :aria-current="item.current ? 'page' : undefined">
                  {{ item.name }}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                       stroke="currentColor" class="w-4 h-4 inline">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
                  </svg>

                </MenuButton>
              </div>

              <transition enter-active-class="transition ease-out duration-100"
                          enter-from-class="transform opacity-0 scale-95"
                          enter-to-class="transform opacity-100 scale-100"
                          leave-active-class="transition ease-in duration-75"
                          leave-from-class="transform opacity-100 scale-100"
                          leave-to-class="transform opacity-0 scale-95">
                <MenuItems
                    class="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-black shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div class="py-1">
                    <MenuItem v-for="(data, index) in item.data" v-slot="{ active }">
                      <a :href="data.href"
                         :class="[
                                   active ? 'bg-gray-100 text-gray-900' : 'text-gray-300',
                                   index != 0 ? 'border-t border-t-gray-800' : '',
                                   'text-gray-100 block px-4 py-2 text-sm hover:bg-black hover:text-yellow-500',
                                   data.current ? 'bg-gray-900 text-yellow-400 cursor-default' : '',
                                   ]">{{
                          data.name
                        }}</a>
                    </MenuItem>
                  </div>
                </MenuItems>
              </transition>
            </Menu>
          </div>
        </div>
      </div>
    </div>

    <div class="-mr-2 flex lg:hidden">
      <!-- Mobile menu button -->
      <DisclosureButton
          class="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
        <span class="sr-only">Open main menu</span>
        <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true"/>
        <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true"/>
      </DisclosureButton>
    </div>
  </div>
</div>

<DisclosurePanel class="lg:hidden">
  <div class="space-y-1 px-2 pt-2 pb-3 sm:px-3">
    <template v-for="item in navigation" :key="item.name">
      <DisclosureButton v-if="!item.data" as="a" :href="item.href"
                      :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block px-3 py-2 rounded-md text-base font-medium']"
                      :aria-current="item.current ? 'page' : undefined">{{ item.name }}
      </DisclosureButton>
      <p class='block px-3 py-2 rounded-md text-base font-medium text-gray-400' v-show="item.data">
        {{ item.name }}
        <ChevronDownIcon class="inline h-5 w-5" aria-hidden="true"/>
      </p>
      <DisclosureButton v-for="subitem in item.data" as="a" :href="subitem.href"
                        :class="[subitem.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block ml-5 px-3 py-2 rounded-md text-base font-medium']"
                        :aria-current="subitem.current ? 'page' : undefined">{{ subitem.name }}
      </DisclosureButton>

    </template>
  </div>
</DisclosurePanel>
</Disclosure>
</template>

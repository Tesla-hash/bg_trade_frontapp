<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          BG Trade Start
        </q-toolbar-title>

        <div>Made by Tesla</div>
      </q-toolbar>
    </q-header>

    <q-drawer
            v-model="leftDrawerOpen"
            show-if-above
            :width="200"
            :breakpoint="600"
          >
          <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid rgba(221, 221, 221, 0);">
              <q-list padding>
                <q-item clickable v-ripple tag="a" rel="noopener" href="#/orders">
                  <q-item-section avatar>
                    <q-icon name="fas fa-balance-scale" />
                  </q-item-section >

                  <q-item-section>
                    Открытые
                  </q-item-section>
                </q-item>

                <q-item clickable v-ripple tag="a" rel="noopener" href="#/history">
                  <q-item-section avatar>
                    <q-icon name="fas fa-cash-register" />
                  </q-item-section>

                  <q-item-section>
                    Закрытые
                  </q-item-section>
                </q-item>

                <q-item clickable v-ripple tag="a" rel="noopener" href="#/settings">
                  <q-item-section avatar>
                    <q-icon name="fas fa-cogs" />
                  </q-item-section>

                  <q-item-section>
                    Настройки
                  </q-item-section>
                </q-item>

                <q-item clickable v-ripple tag="a" rel="noopener" href="#/apps">
                  <q-item-section avatar>
                    <q-icon name="fas fa-mobile-alt" />
                  </q-item-section>

                  <q-item-section>
                    Приложения
                  </q-item-section>
                </q-item>
                <q-item clickable v-ripple>
                  <q-item-section avatar>
                    <q-icon name="fas fa-chalkboard-teacher" />
                  </q-item-section>

                  <q-item-section>
                    Уроки
                  </q-item-section>
                </q-item>
              </q-list>
            </q-scroll-area>

            <q-img class="absolute-top" style="height: 150px">
              <div class="absolute-bottom bg-transparent">
                <q-avatar size="56px" class="q-mb-sm">
                  <img src="../statics/icons/bithumb.png">
                </q-avatar>
                <div class="text-weight-bold">Tesla Sixx</div>
                <div>@electro_207</div>
              </div>
            </q-img>
    </q-drawer>
    <q-page-container style="padding-left:10px; padding-top:0px;">
      <router-view />
      </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink';

export default {
  components: {
    EssentialLink

  },
  data(){
    return{
      leftDrawerOpen:false
    }
  }

}

</script>

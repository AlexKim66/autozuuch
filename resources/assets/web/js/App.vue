<template>
    <div>
        <header-top></header-top>
<!--        <header-top :contact="contact"></header-top>-->


<!--        <paper-modal-->
<!--            name="page-modal"-->
<!--            class="page-modal"-->
<!--            :min-width="200"-->
<!--            :min-height="200"-->
<!--            :pivot-y="0.5"-->
<!--            :adaptive="true"-->
<!--            :reset="true"-->
<!--            :draggable="true"-->
<!--            :resizable="true"-->
<!--            draggable=".page-header"-->
<!--            width="50%"-->
<!--            height="600">-->
<!--            modal-->
<!--        </paper-modal>-->
        <router-view :key="$route.path"></router-view>
        <footer-comp></footer-comp>
    </div>
</template>

<script>
import HeaderTop from "./components/header"
import footerComp from "./components/footer"
export default {
    components:{
        HeaderTop,
        footerComp
    },
    data() {
        return {
            isActive: false,
            isClose: true,
            // contact: window.init.contact,
        }
    },
    created() {

    },
    methods: {
        openModal() {
            this.$modal.show('page-modal');
        },
        showNav() {
            this.isActive = !this.isActive;
        },
    }
};
</script>

<template>
    <div class="profile">
        <ProfileDetails/>
    </div>
</template>

<script>
import ProfileDetails from "@/common/components/profile/ProfileDetails.vue";
export default {
    name: "profile",
    components: {
        ProfileDetails
    }
}
</script>
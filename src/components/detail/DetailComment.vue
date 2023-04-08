<template>
  <div class="lg:mx-[12%] slg:mx-[7%] md:mx-[2%] sm:mx-[2rem] mb-[3rem]">
    <h1 class="text-[1.5rem] font-normal my-[2rem] md:text-left sm:text-center">
      Review
    </h1>
    <div class="w-full md:flex sm:grid">
      <div class="comment-list md:w-[70%] sm:w-full my-[2rem]">
        <div
          v-for="(item, index) in commentList"
          :key="index"
          class="mb-[2rem] pb-[1rem] border-b"
        >
          <p>User : {{ item.userName }}</p>
          <div class="flex gap-[5rem]">
            <div><ion-icon name="star-outline"></ion-icon> {{ item.rate }}</div>
            <div>Time: {{ item.createdAt }}</div>
          </div>
          <p>{{ item.comment }}</p>
        </div>
      </div>
      <div class="rate-form md:w-[30%] sm:w-full ml-[2rem] sticky top-[10rem]">
        <h4>Add your review</h4>
        <form action="submit" @submit.prevent="hanleSubmit" class="grid">
          <label for="rate"
            >Your Rate:
            <select
              name="rate"
              id=""
              v-model="userReview.rate"
              class="bg-[transparent]"
            >
              <option
                :value="rate"
                v-for="(rate, index) in 10"
                :key="index"
                class="bg-[transparent] text-[black]"
              >
                {{ rate }}
              </option>
            </select>
          </label>
          <label for="comment">Comment: </label>
          <textarea
            name="comment"
            id=""
            cols=""
            rows="10"
            v-model="userReview.comment"
            class="w-full bg-[transparent] border p-[.4rem]"
          ></textarea>
          <button class="btn mt-[2rem]">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, reactive, toRefs } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  props: {
    commentList: {
      type: Array,
    },
    item: {
      type: Object,
    },
  },
  setup(props) {
    const { item } = toRefs(props);
    const store = useStore();
    const router = useRouter();
    const userReview = reactive({
      rate: "",
      content: "",
      itemId: "",
      userId: "",
      userName: "",
    });
    const hanleSubmit = () => {
      const user = computed(() => store.state.user.user);

      try {
        userReview.itemId = item.value[0].itemId;
        userReview.userId = user.value[0].userId;
        userReview.userName = user.value[0].firstName + user.value[0].lastName;
        item.value[0].rate =
          Math.round(((item.value[0].rate + userReview.rate) / 2) * 10) / 10;
        const newItem = reactive({
          itemId: item.value[0].itemId,
          rate: item.value[0].rate,
        });
        store.dispatch("items/addReviewAction", {
          userReview,
          newItem,
          router,
        });
        // store.dispatch("review/getItemReviewAction", item.value.itemId);
      } catch (err) {
        alert("You should Sign in to continue");
      }
    };
    return {
      userReview,
      hanleSubmit,
    };
  },
};
</script>

<style></style>

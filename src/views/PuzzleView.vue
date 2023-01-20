<template>
  <Layout>
    <div class="puzzle">
      <div class="custom-wrapper">
        <div class="chess">
          <Chessboard @checkmate="onCheckmate" />
        </div>
        <div>
          <leaderboard :ratingList="this.ratingList"></leaderboard>
          <div>
            <span
              >Ako ne znate kako, molim pogledajte pa ponovite poteze:
              https://www.youtube.com/watch?v=1Mn2Kb4QQe8</span
            >
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import Layout from "../layouts/Layout.vue";
import Chessboard from "../components/Chessboard.vue";
import Leaderboard from "../components/Leaderboard.vue";
import { useAuthStore } from "../stores/auth";
import Parse from "parse/dist/parse.js";

export default {
  data() {
    return {
      ratingList: [],
    };
  },
  async beforeCreate() {
    Parse.initialize(
      "MUwFlUc2CqyycEquX47qc5u0t2Q7IxD1DgYZ8Yiv",
      "fRmrxpw2UZIuHa0qgCpDEakyKIouNhUgQD4WCrYk"
    );
    Parse.serverURL = "https://parseapi.back4app.com/";

    const solversObject = Parse.Object.extend("solvers");
    const query = new Parse.Query(solversObject);

    query.ascending("moves");

    query.find().then(
      (data) => {
        console.log(data);
        data.forEach((solver) =>
          this.ratingList.push({
            username: solver.attributes.username,
            moves: solver.attributes.moves,
          })
        );
      },
      (error) => {
        console.log("Error", error);
      }
    );
  },
  components: {
    Layout,
    Chessboard,
    Leaderboard,
  },
  methods: {
    async onCheckmate(newSolver) {
      const SolverConst = Parse.Object.extend("solvers");
      const solver = new SolverConst();

      solver.set("username", newSolver.username);
      solver.set("moves", newSolver.moves);

      solver.save().then(
        (solver) => {
          alert("New object created with objectId: " + solver.id);
        },
        (error) => {
          alert(
            "Failed to create new object, with error code: " + error.message
          );
        }
      );
      await this.updateRatingList();
    },
    async updateRatingList() {
      const solversObject = Parse.Object.extend("solvers");
      const query = new Parse.Query(solversObject);

      query.ascending("moves");

      query.find().then(
        (data) => {
          this.ratingList = [];
          data.forEach((solver) =>
            this.ratingList.push({
              username: solver.attributes.username,
              moves: solver.attributes.moves,
            })
          );
        },
        (error) => {
          console.log("Error", error);
        }
      );
    },
  },
};
</script>

<style scoped>
@media (min-width: 1024px) {
  .puzzle {
    display: flex;
    align-items: center;
  }
}
.chess {
  margin-right: 7em;
}
</style>

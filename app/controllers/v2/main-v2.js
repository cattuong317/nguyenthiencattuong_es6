import { https } from "../../service/service.js";
import { layThongtinTuForm } from "../v1/controller-v1.js";
import { renderFoodList, showDataForm } from "./controller-v2.js";
// lần đầu load trang
let fetchFoodList = () => {
  https
    .get("/food")
    .then((res) => {
      renderFoodList(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
fetchFoodList();
// delete
function deleteFood(id) {
  https
    .delete(`/food/${id}`)
    .then((res) => {
      fetchFoodList();
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}
window.deleteFood = deleteFood;
// add
window.addFood = () => {
  let food = layThongtinTuForm();
  https
    .post("/food", food)
    .then((res) => {
      $("#exampleModal").modal("hide");
      console.log(res);
      fetchFoodList();
    })
    .catch((err) => {
      console.log(err);
    });
};
// edit
window.editFood = (id) => {
  $("#exampleModal").modal("show");
  https
    .get(`/food/${id}`)
    .then((res) => {
      showDataForm(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
// update
window.updateFood = () => {
  let food = layThongtinTuForm();
  https
    .put(`/food/${food.ma}`, food)
    .then((res) => {
      $("#exampleModal").modal("hide");
      console.log(res);
      fetchFoodList();
    })
    .catch((err) => {
      console.log(err);
    });
};

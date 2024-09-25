const donateContainer = document.getElementById("donate-container");
const historyContainer = document.getElementById("history-container");
const Noakhali = document.getElementById("Noakhali").innerText;
const Feni = document.getElementById("Feni").innerText;
const quotaMovement = document.getElementById("Quota-Movement").innerText;

document.getElementById("btn-donate").addEventListener("click", function () {
  historyContainer.classList.add("hidden");
  donateContainer.classList.remove("hidden");
  document.getElementById("btn-history").classList.remove("bg-primary");
  document.getElementById("btn-donate").classList.add("bg-primary");
});

document.getElementById("btn-history").addEventListener("click", function () {
  historyContainer.classList.remove("hidden");
  donateContainer.classList.add("hidden");

  document.getElementById("btn-history").classList.add("bg-primary");
  document.getElementById("btn-donate").classList.remove("bg-primary");
});

document.getElementById("donate-now-1").addEventListener("click", function () {
  const getDonateMoney = getMoney ("input-amount");
  const setDonateMoney = setMoney("donate-amount-1");
  document.getElementById("donate-amount-1").innerText = getDonateMoney;
  const changeTotalAmount = totalAmount("input-amount");
  document.getElementById("total-amount").innerText = changeTotalAmount;
  historyUpdate("input-amount", Noakhali);
});

document.getElementById("donate-now-2").addEventListener("click", function () {
  const getDonateMoney = getMoney("input-amount-2");
  const setDonateMoney = setMoney("donate-amount-2");

  document.getElementById("donate-amount-2").innerText = getDonateMoney;

  const changeTotalAmount = totalAmount("input-amount-2");
  document.getElementById("total-amount").innerText = changeTotalAmount;
  historyUpdate("input-amount-2", "Feni");
});

document.getElementById("donate-now-3").addEventListener("click", function () {
  const getDonateMoney = getMoney("input-amount-3");
  const setDonateMoney = setMoney("donate-amount-3");

  document.getElementById("donate-amount-3").innerText = getDonateMoney;

  const changeTotalAmount = totalAmount("input-amount-3");
  document.getElementById("total-amount").innerText = changeTotalAmount;
  historyUpdate("input-amount-3", "Quota-Movement");
});

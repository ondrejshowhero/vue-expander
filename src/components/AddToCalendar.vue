<template>
  <div class="add-to-calendar">
    <add-to-calendar-button
      ref="calendarButton"
      name="Se IT ENDS WITH US i biografen"
      description="Lily Bloom (Blake Lively) har ikke altid haft det let, men nu ser alt lysere ud. Hun er klar til at starte sit nye liv i Boston og realisere sin livslange drøm om at få sin egen blomsterbutik. Helt tilfældigt møder hun den meget charmerende neurokirurg Ryle (Justin Baldoni), der fuldstændig slår benene væk under hende. De forelsker sig dybt, men der er også sider i deres forhold, som skaber udfordringer. Da Lilys første kærlighed, Atlas (Brandon Sklenar), pludselig kommer ind i hendes liv igen, ændres hendes forhold til Ryle, og Lily indser, at hun må lære at stole på egen styrke for at træffe et umuligt valg for sin fremtid..."
      startDate="2024-09-05"
      endDate="2024-09-05"
      startTime="10:00"
      endTime="12:30"
      location="biografen"
      options="'Apple','Google','iCal','Microsoft365','Outlook.com'"
      timeZone="Europe/Copenhagen"
      lightMode="bodyScheme"
      listStyle="dropdown"
      listPosition="top"
      label="Tilføj til kalender"
      size="4"
      buttonsList
      hideTextLabelButton
      buttonStyle="round"
    ></add-to-calendar-button>
  </div>
</template>

<script>
import "add-to-calendar-button";

export default {
  name: "AddToCalendar",
  mounted() {
    this.applyButtonStyles();
  },
  methods: {
    applyButtonStyles() {
      const calendarButton = this.$refs.calendarButton;
      if (calendarButton) {
        calendarButton.addEventListener("ready", () => {
          const button =
            calendarButton.shadowRoot.querySelector(".atcb-button");
          if (button) {
            button.style.width = "100%";
            button.style.maxWidth = "10rem";
            button.style.height = "2rem";
            button.style.backgroundColor = "#007bff";
            button.style.color = "#ffffff";
            button.style.border = "none";
            button.style.borderRadius = "4px";
          }
        });
      }
    },
  },
};
</script>

<style scoped>
/* Use ::v-deep to penetrate the shadow DOM */
::v-deep .atcb-button {
  width: 100%;
  max-width: 10rem;
  height: 2rem;
  background-color: #007bff !important; /* Change this to your desired background color */
  color: #ffffff !important; /* Change this to your desired text color */
  border: none !important; /* Optional: remove border */
  border-radius: 4px !important; /* Optional: add border radius */
}

@media (min-width: 600px) {
  ::v-deep .atcb-button {
    width: 50%;
    max-width: 15rem;
    height: 2.5rem;
  }
}

@media (min-width: 900px) {
  ::v-deep .atcb-button {
    width: 33%;
    max-width: 20rem;
    height: 3rem;
  }
}
</style>

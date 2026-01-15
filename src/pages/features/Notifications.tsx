import FeatureDetail from "./FeatureDetail";

const Notifications = () => (
  <FeatureDetail
    title="Smart Notifications"
    subtitle="Never miss important pet moments"
    description="Get reminders for vet visits, vaccinations, community events, and important updates."
    bullets={[
      "Vet appointment reminders",
      "Vaccination alerts",
      "Community updates",
      "Custom notification settings",
    ]}
  />
);

export default Notifications;

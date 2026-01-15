import FeatureDetail from "./FeatureDetail";

const Groups = () => {
  return (
    <FeatureDetail
      title="Interest Groups"
      subtitle="Find your pet tribe and grow together"
      description="Interest Groups allow pet parents to connect with like-minded people based on breed, training goals, lifestyle, or shared interests. These focused communities make it easier to learn, share, and grow together."
      bullets={[
        "Breed-specific communities (Dogs, Cats, Birds, Exotic pets)",
        "Training and behavior-focused groups",
        "Rescue, adoption, and foster support groups",
        "Moderated discussions to ensure safety and positivity",
        "AI-assisted content moderation and guidance",
      ]}
    />
  );
};

export default Groups;

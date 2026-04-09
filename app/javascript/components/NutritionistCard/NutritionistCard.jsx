import React, { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import Button from "../Button";
import NutritionistAvatar from "./NutritionistAvatar";
import NutritionistHeader from "./NutritionistHeader";
import NutritionistBio from "./NutritionistBio";
import NutritionistServices from "./NutritionistServices";

const NutritionistCard = memo(({ nutritionist, onSchedule }) => {
  const { t } = useTranslation();
  const { name, specialty, photo_url, bio, services } = nutritionist;

  const handleScheduleClick = useCallback(() => {
    onSchedule(nutritionist);
  }, [nutritionist, onSchedule]);

  return (
    <div className="bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-shadow duration-200 p-5 flex flex-col sm:flex-row gap-5">
      <NutritionistAvatar photoUrl={photo_url} name={name} />
      <div className="flex-1 min-w-0">
        <NutritionistHeader name={name} specialty={specialty} />

        {bio && <NutritionistBio bio={bio} />}

        <NutritionistServices services={services} />
      </div>

      <div className="w-full sm:w-auto flex flex-col gap-2 shrink-0 self-start sm:self-center">
        <Button
          onClick={handleScheduleClick}
          style="primary"
          label={t("nutritionist.schedule_button")}
        />
        <Button
          label={t("nutritionist.website_button")}
          style="secondary"
          title={t("nutritionist.website_button_title")}
          isDisabled={true}
        />
      </div>
    </div>
  );
});

export default NutritionistCard;

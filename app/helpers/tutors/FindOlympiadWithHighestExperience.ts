import ITutor from "../../api/types/tutors/ITutor";

function FindOlympiadWithHighestExperience(Tutor: ITutor): string {
    let HighestExperience = 0;
    let OlympiadWithHighestExperience = '';
  
    for (const Olympiad of Tutor.TutorDetails.Olympiads) {
        let ExperienceValue = 0;
      
        switch (Olympiad.Experience) {
            case 'WINNER':
                ExperienceValue = 4;
                break;
            case 'INTERNATIONAL':
                ExperienceValue = 3;
                break;
            case 'LAUREATE':
                ExperienceValue = 2;
                break;
            case 'FINALIST':
                ExperienceValue = 1;
                break;
        }
  
        if (ExperienceValue > HighestExperience) {
            HighestExperience = ExperienceValue;
            OlympiadWithHighestExperience = Olympiad.Name;
        }
    }
  
    return OlympiadWithHighestExperience;
}

export default FindOlympiadWithHighestExperience;
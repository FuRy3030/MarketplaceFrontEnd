import IPartialTutor from "../../api/types/tutors/IPartialTutor";
import ITutor from "../../api/types/tutors/ITutor";

function FindTutorHighestAchievement(Tutor: ITutor | IPartialTutor, IsSimplifiedFormat: boolean = false) {
    const TutorOlympiads = Tutor.TutorDetails.Olympiads;

    if (IsSimplifiedFormat) {
        return TutorOlympiads.findIndex((Olympiad) => Olympiad.Experience === 'WINNER') != -1 ? 'Zwycięzca' :
            TutorOlympiads.findIndex((Olympiad) => Olympiad.Experience === 'INTERNATIONAL') != -1 ? 'Międzynarodowa' :
            TutorOlympiads.findIndex((Olympiad) => Olympiad.Experience === 'LAUREATE') != -1 ? 'Laureat' :
            'Finalista';
    }

    return TutorOlympiads.findIndex((Olympiad) => Olympiad.Experience === 'WINNER') != -1 ? 'Zwycięzca olimpiady' :
        TutorOlympiads.findIndex((Olympiad) => Olympiad.Experience === 'INTERNATIONAL') != -1 ? 'Olimpiada międzynarodowa' :
        TutorOlympiads.findIndex((Olympiad) => Olympiad.Experience === 'LAUREATE') != -1 ? 'Laureat olimpiady' :
        'Finalista olimpiady';
};

export default FindTutorHighestAchievement;

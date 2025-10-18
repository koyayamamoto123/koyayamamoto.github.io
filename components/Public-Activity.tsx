import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import Link from "next/link";

export default function PublicActivity() {
  return (
    <section>
      <h2 className="text-3xl font-bold font-serif  border-border pb-2 mb-4">
        Public Activity
      </h2>
      <div className="grid gap-6">
        <Card className="border border-border rounded-sm shadow-none">
          <CardHeader>
            <CardTitle className="text-xl font-bold font-serif">
              Reactjs and Nextjs Mentor
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-base text-muted-foreground mb-2">
              Mentoring students in Advanced Frontend Development in Reactjs and
              Nextjs at{" "}
              <Link
                className="text-blue-600 hover:underline"
                href="https://nexustutorial.vercel.app/course/advanced-frontend-bootcamp"
              >
                Nexus Tutorial
              </Link>
              , I taught various advanced concepts in Reactjs and Nextjs,
              helping students build dynamic and responsive web applications.
            </p>

            <Link
              href="https://nexustutorial.vercel.app/course/backend-dev-for-beginners"
              className="text-black bg-white border rounded-sm border-black hover:underline p-2 text-sm mt-2 inline-block"
            >
              View Course
            </Link>
          </CardContent>
        </Card>
        <Card className="border border-border rounded-sm shadow-none">
          <CardHeader>
            <CardTitle className="text-xl font-bold font-serif">
              Backend and DSA Mentor
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-base text-muted-foreground mb-2">
              Mentoring students in Data Structures and Algorithms at{" "}
              {/* DSA */}{" "}
              <Link
                className="text-blue-600 hover:underline"
                href="https://nexustutorial.vercel.app/course/backend-dev-for-beginners"
              >
                Nexus Tutorial
              </Link>
              , helping them build a strong foundation in problem-solving
              skills.
            </p>
            {/* Backend */}
            <p>
              Teaching backend development concepts using Expressjs, including RESTful APIs,
              database management, and server-side programming.
            </p>
            <Link
              href="https://nexustutorial.vercel.app/course/backend-dev-for-beginners"
              className="text-black bg-white border rounded-sm border-black hover:underline p-2 text-sm mt-2 inline-block"
            >
              View Course
            </Link>
          </CardContent>
        </Card>
        <Card className="border border-border rounded-sm shadow-none">
          <CardHeader>
            <CardTitle className="text-xl font-bold font-serif">
              Frontend Mentor
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-base text-muted-foreground mb-2">
              I was mentoring students in Frontend Development at{" "}
              <Link
                className="text-blue-600 hover:underline"
                href="https://gdg.community.dev/"
              >
                GDG AAU (Formerly GDSC)
              </Link>
              , covering topics such as HTML, CSS, JavaScript, and React.
            </p>
            <Link
              href="https://www.linkedin.com/posts/jiru-gutema_a-certificate-from-gdsc-activity-7250769310120390656-5vNd?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEd-fxwByr7erWREUfXW94sBGM8_vdEa7PM"
              className="text-black rounded-sm bg-white border border-black hover:underline p-2 text-sm mt-2 inline-block"
            >
              View Certificate
            </Link>
          </CardContent>
        </Card>
        <Card className="border border-border rounded-sm shadow-none">
          <CardHeader>
            <CardTitle className="text-xl font-bold font-serif">
              Core Team Member
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-base text-muted-foreground mb-2">
              As a core team member of the{" "}
              <Link
                className="text-blue-600 hover:underline"
                href="https://www.meetup.com/aws-cloud-club-at-addis-ababa-university/"
              >
                AWS Cloud Club AAU
              </Link>
              , I participated in various cloud computing projects and
              workshops, helping to promote AWS technologies among students at
              AAU.
            </p>
            <Link
              href="https://www.credly.com/badges/8ba9a9c5-14e9-4a43-9f8f-3695e44c05a3"
              className="text-black rounded-sm bg-white border border-black hover:underline p-2 text-sm mt-2 inline-block"
            >
              Check Certificate
            </Link>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

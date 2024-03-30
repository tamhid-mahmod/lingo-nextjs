import { getCourses } from "@db/queries";

import { CoursesList } from "@/sections/main/courses/courses-list";

export default async function CoursesPage() {
  const data = await getCourses();

  return (
    <div className="h-full max-w-[912px] px-3 mx-auto">
      <h1 className="text-2xl font-bold text-neutral-700">Language Courses</h1>
      <CoursesList
        courses={data}
        activeCourseId="d07f5105-d444-4091-b27f-41e17813197b"
      />
    </div>
  );
}

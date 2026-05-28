import { useParams, useNavigate } from "react-router";
import { data } from "../util/data";

const JobDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const jobs = data.jobs;

  const job = jobs.find((j) => String(j.id) === id);

  if (!job)
    return (
      <div className="text-center py-20 text-gray-500">
        Job not found.
        <button onClick={() => navigate(-1)} className="text-primary underline">
          Go back
        </button>
      </div>
    );

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="container-main h-full white py-1">
        <div>
          <button onClick={() => navigate(-1)} className="primary-btn  mx-5">
            Go back
          </button>
        </div>
        <div className="relative grid grid-cols-1 sm:grid-cols-[70%_30%] items-start">
          {/* left column */}
          <div className="bg-white w-full  sm:p-2">
            <div className="shadow-2xl w-full ">
              <div className="px-2 sm:px-4 text-sm sm:text-2xl w-full ">
                {job.title}
              </div>
              <p className="px-2 py-1 text-xs sm:text-sm sm:px-6 w-full">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas
                voluptates tenetur, vitae ratione quia corporis provident
                excepturi pariatur accusamus, debitis error porro consectetur
                cum? Voluptatibus cum voluptates harum ipsum veritatis mollitia
                explicabo in. Adipisci placeat dignissimos nisi doloremque
                repellendus voluptate officia sit quia tenetur numquam ullam cum
                laborum iste, ab voluptas enim nesciunt repudiandae voluptates
                expedita? Illo maiores, dignissimos sit dolor necessitatibus
                quas non laudantium iusto tempora est itaque facilis labore at
                dolorem ea fugiat maxime doloremque repudiandae libero
                consequuntur id pariatur sint laborum tempore! Tenetur sequi sit
                officiis neque culpa voluptatem nihil recusandae non asperiores
                provident beatae sunt tempora placeat rem vel quidem molestiae
                alias amet illo laboriosam eligendi, reiciendis eveniet ea.
                Consequatur facere dolorum quidem, eos deleniti numquam adipisci
                enim! Sint cum ad possimus blanditiis, ab dicta recusandae saepe
                dolorum dolorem ducimus perspiciatis esse quod ratione in velit
                fugit tenetur quo iste amet. Dolorum odit rem tempora
                voluptatum, distinctio quas ab hic accusamus officia amet quidem
                doloribus non, magnam obcaecati doloremque repellendus
                accusantium debitis ea atque tenetur deleniti. Doloremque
                asperiores officia vitae est ipsum necessitatibus voluptatem
                repellendus at, praesentium sapiente dolore saepe aspernatur
                illum animi ipsam velit placeat nostrum cum! Voluptatem magni
                atque possimus exercitationem perspiciatis ducimus, alias,
                cumque enim repudiandae, aliquam saepe ex. Esse perferendis
                placeat ad veritatis laboriosam tenetur aspernatur ducimus? Id
                enim exercitationem itaque accusamus aut non doloremque eius
                laudantium ducimus magni porro officia dolore sit, ipsa magnam
                nostrum quasi a culpa perferendis! Ad molestias illo inventore
                ducimus incidunt alias laudantium perspiciatis corporis, aliquid
                atque consequuntur nulla tempore accusamus dolorem nesciunt.
                Repudiandae neque pariatur facere necessitatibus. Esse sapiente
                nobis aliquid voluptatibus sed aperiam ad molestias numquam
                quibusdam quae enim repudiandae eum voluptates, doloribus at
                minima ratione non quis! Sit, sint quisquam iste tempore
                deserunt odio numquam facere eaque, iusto exercitationem dicta
                sequi minima. Sint, maiores officia! Ut nihil consequatur ad
                nisi dolores voluptas deserunt. Tempora consequuntur vitae
                deserunt magnam sequi saepe ipsum facilis similique blanditiis,
                animi nesciunt molestias aut, ad sint cumque accusantium
                eligendi numquam nam quaerat architecto est corporis. Esse, a
                ratione. Dolor error eius ipsum voluptates impedit libero atque
                dolores ea aut ad est voluptate exercitationem incidunt commodi
                recusandae adipisci, odit ab quia reiciendis sapiente.
                Perspiciatis maxime fuga, eaque deserunt totam iure libero
                accusantium est laboriosam, aliquid soluta commodi dignissimos
                non ab facere eius dolorum necessitatibus, sed quam voluptatibus
                voluptas saepe nobis amet. Explicabo ratione error veritatis aut
                quisquam molestiae facilis dolor officiis maxime quas. Aliquid
                aut soluta saepe possimus reiciendis nostrum explicabo pariatur
                temporibus fugiat obcaecati cupiditate voluptas deserunt
                aspernatur porro adipisci a laudantium error, earum amet tenetur
                atque quo dolorem magnam quis. Quia aliquam, maiores ea
                consequatur libero omnis facilis totam labore tempora optio illo
                saepe asperiores illum numquam nisi, dolore, vel ullam ipsam!
                Neque itaque repellat a obcaecati illum corporis nostrum, eius
                temporibus ipsum saepe quos quasi ab vel sequi id facilis soluta
                voluptate amet tempore adipisci consequatur minus dolores
                voluptates. Nisi facilis inventore, nulla aliquam fugiat
                molestias sunt in, iure quibusdam, sint sed esse fugit
                architecto laboriosam provident cupiditate.
              </p>
            </div>
          </div>
          {/* right column */}
          <div className="lg:sticky lg:top-14 bg-secondary rounded-xl">
            <div className=" flex flex-col justify-start items-center py-4 px-2 space-y-2">
              <div
                className={`w-16 h-16 sm:w-20 sm:h-20 bg-linear-to-br ${job.logoBg} rounded-lg shrink-0 flex items-center justify-center`}
              >
                <span className="text-white text-2xl">{job.logo}</span>
              </div>
              <h2 className="text-primary text-lg font-extrabold">
                {job.company}
              </h2>
              <div className="bg-white px-4 flex flex-col justify-center items-center h-40 text-xs py-2 space-y-2 rounded-xl">
                <div className="text-center font-bold text-md">
                  {job.jobType}
                </div>
                <div className="grid grid-cols-2 gap-2 space-y-2">
                  <div className="flex flex-col space-y-2 ">
                    <span className="text-[10px] font-bold">SALARY</span>
                    <span className="text-xs">{`${job.salary}k`}</span>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <span className="text-[10px] font-bold">COUNTRY</span>
                    <span className="text-xs">{job.country}</span>
                  </div>
                  <hr className="col-span-2" />
                  <div className="flex flex-col space-y-2 ">
                    <span className="text-[10px] font-bold">
                      EMPLOYMENT TYPE
                    </span>
                    <span className="text-xs">{job.jobType}</span>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <span className="text-[10px] font-bold">DATE</span>
                    <span className="text-xs">{job.createdAt}</span>
                  </div>
                </div>
              </div>

              {/* apply this button */}
              <div className="w-full text-center py-2">
                <button className="primary-dark-btn w-[70%]">
                  Apply for this Job
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetailsPage;

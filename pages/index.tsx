import { useState } from "react";
import Head from "next/head";
import Link from "next/link";

const stats = [
  { label: "Prescriptions fulfilled", value: "+ 10,000" },
  { label: "Satisfied patients", value: "+ 100" },
  { label: "Unique medications sourced", value: "57" },
];
const values = [
  {
    name: "Compassion and Empathy",
    description:
      "We believe in the power of compassion and empathy to drive positive change in healthcare. Every action we take is guided by our deep understanding of the challenges our patients face.",
  },
  {
    name: "Integrity and Ethics",
    description:
      "Integrity and ethics are the foundation of everything we do. We uphold the highest standards of honesty, transparency, and ethical conduct in all our interactions.",
  },
  {
    name: "Patient-Centric Care",
    description:
      "Our patients are at the heart of our mission. We are dedicated to providing patient-centric care, tailoring our services to the unique needs of each individual.",
  },
  {
    name: "Excellence in Healthcare",
    description:
      "We are committed to excellence in healthcare. From sourcing the highest quality medications to offering expert guidance, we continually strive for excellence in all aspects of our work.",
  },
  {
    name: "Global Accessibility",
    description:
      "Healthcare knows no borders, and neither do we. We are unwavering in our commitment to making rare medications accessible to patients around the world.",
  },
  {
    name: "Innovation and Collaboration",
    description:
      "Innovation drives progress, and collaboration fuels innovation. We actively seek opportunities to collaborate with healthcare professionals, organizations, and patients to advance the field of rare medications.",
  },
];

const footerNavigation = {
  social: [
    {
      name: "Facebook",
      href: "https://www.facebook.com/profile.php?id=61551352703289",
      icon: (props: Record<string, unknown>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/solonduhq/",
      icon: (props: Record<string, unknown>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    // {
    //   name: "Twitter",
    //   href: "#",
    //   icon: (props) => (
    //     <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    //       <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
    //     </svg>
    //   ),
    // },
  ],
};

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-teal-50">
      {/* Header */}
      <Head>
        <title>{`Solondu: Your Source for Rare Medications - Contact Us Now on WhatsApp`}</title>
      </Head>
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Solondu Logo</span>
              <img className="h-10 w-auto" src="/logo.png" alt="" />
            </a>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link
              href="https://www.instagram.com/solonduhq/"
              className="text-sm font-semibold leading-6 no-underline text-gray-900"
            >
              Follow Us <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </nav>
      </header>

      <main className="isolate">
        {/* Hero section */}
        <div className="relative isolate -z-10">
          <svg
            className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-teal-100 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              width="100%"
              height="100%"
              strokeWidth={0}
              fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
            />
          </svg>
          <div
            className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
            aria-hidden="true"
          >
            <div
              className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#5bcdab] to-[#9089fc] opacity-30"
              style={{
                clipPath:
                  "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
              }}
            />
          </div>
          <div className="overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
              <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                  <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                    Solondu: Your Lifeline to Rare Medications
                  </h1>
                  <p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                    We are dedicated to empowering your journey to better health
                    by providing you with essential access to rare and
                    specialized medications. Our mission is to bring hope,
                    healing, and health to your doorstep. Discover the
                    difference Solondu can make in your life.
                  </p>
                  <div className="mt-10 flex items-center gap-x-6">
                    <Link
                      href="https://wa.me/+2349012558753"
                      className="rounded-md bg-teal-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm no-underline hover:bg-teal-700"
                    >
                      Fulfill your Prescription
                    </Link>
                  </div>
                </div>
                <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                  <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                    <div className="relative">
                      <img
                        src="/images/mac.jpg"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                    <div className="relative">
                      <img
                        src="/images/love.jpeg"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <img
                        src="/images/fit.jpg"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                    <div className="relative">
                      <img
                        src="/images/guide.jpg"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <img
                        src="/images/papa.jpg"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl -mt-16">
          <div className="mx-auto pb-24 sm:pb-32 max-w-7xl px-6 lg:px-8">
            <div className="py-8">
              <h2 className="text-lg font-semibold leading-8 text-gray-900">
                {`We source from the world’s most innovative manufacturers`}
              </h2>
            </div>
            <div className="-mx-6 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-3">
              <div className="bg-gray-400/5 p-8 sm:p-10">
                <img
                  className="max-h-12 w-full object-contain"
                  src="/images/roche.svg"
                  alt="Roche"
                  width={158}
                  height={48}
                />
              </div>
              <div className="bg-gray-400/5 p-6 sm:p-10">
                <img
                  className="max-h-12 w-full object-contain"
                  src="/images/pfizer.png"
                  alt="Pfizer"
                  width={158}
                  height={48}
                />
              </div>
              <div className="bg-gray-400/5 p-6 sm:p-10">
                <img
                  className="max-h-12 w-full object-contain"
                  src="/images/jj.png"
                  alt="Johnson & Johnson"
                  width={158}
                  height={48}
                />
              </div>
              <div className="bg-gray-400/5 p-6 sm:p-10">
                <img
                  className="max-h-12 w-full object-contain"
                  src="/images/novartis.png"
                  alt="Novartis"
                  width={158}
                  height={48}
                />
              </div>
              <div className="bg-gray-400/5 p-6 sm:p-10">
                <img
                  className="max-h-12 w-full object-contain"
                  src="/images/gilead.png"
                  alt="Gilead"
                  width={158}
                  height={48}
                />
              </div>
              <div className="bg-gray-400/5 p-6 sm:p-10">
                <img
                  className="max-h-12 w-full object-contain"
                  src="/images/az.png"
                  alt="AstraZeneca"
                  width={158}
                  height={48}
                />
              </div>
              <div className="bg-gray-400/5 p-6 sm:p-10">
                <img
                  className="max-h-12 w-full object-contain"
                  src="/images/bristol.png"
                  alt="Bristol Myers Squibb"
                  width={158}
                  height={48}
                />
              </div>
              <div className="bg-gray-400/5 p-6 sm:p-10">
                <img
                  className="max-h-12 w-full object-contain"
                  src="/images/lilly.png"
                  alt="Eli Lilly"
                  width={158}
                  height={48}
                />
              </div>
              <div className="bg-gray-400/5 p-6 sm:p-10">
                <img
                  className="max-h-12 w-full object-contain"
                  src="/images/boe.png"
                  alt="Boehringer Ingelheim"
                  width={158}
                  height={48}
                />
              </div>
              <div className="bg-gray-400/5 p-6 sm:p-10">
                <img
                  className="max-h-12 w-full object-contain"
                  src="/images/gsk.png"
                  alt="GlaxoSmithKline"
                  width={158}
                  height={48}
                />
              </div>
              <div className="bg-gray-400/5 p-6 sm:p-10">
                <img
                  className="max-h-12 w-full object-contain"
                  src="/images/novo.png"
                  alt="Novo Nordisk"
                  width={158}
                  height={48}
                />
              </div>
              <div className="bg-gray-400/5 p-6 sm:p-10">
                <img
                  className="max-h-12 w-full object-contain"
                  src="/images/merck.png"
                  alt="Merck"
                  width={158}
                  height={48}
                />
              </div>
            </div>
          </div>
        </div>
        {/* Content section */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our mission
            </h2>
            <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
              <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
                <p className="text-xl leading-8 text-gray-600">
                  At Solondu, our mission is deeply rooted in compassion and
                  driven by a singular goal: to transform the lives of
                  individuals facing critical illnesses.
                </p>
                <div className="mt-10 max-w-xl text-base leading-7 text-gray-700">
                  <p>
                    We believe that access to life-saving and life-enhancing
                    medications should never be a barrier to hope and healing.
                    That's why we're committed to sourcing and delivering rare
                    and specialized medications, ensuring that they reach those
                    who need them most, no matter where they are in the world.
                  </p>
                  <p className="mt-10">
                    We strive to be a source of guidance, support, and
                    inspiration for every patient and caregiver on their unique
                    healthcare journey. We understand the challenges, fears, and
                    uncertainties that come with critical illnesses, and we are
                    here to offer not only medications but also expertise,
                    empathy, and unwavering dedication.
                  </p>
                </div>
              </div>
              <div className="lg:flex lg:flex-auto lg:justify-center">
                <dl className="w-64 space-y-8 xl:w-80">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="flex flex-col-reverse gap-y-4"
                    >
                      <dt className="text-base leading-7 text-gray-600">
                        {stat.label}
                      </dt>
                      <dd className="text-5xl font-semibold tracking-tight text-gray-900">
                        {stat.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>

        {/* Image section */}
        <div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
          <img
            src="/images/gen.jpg"
            alt=""
            className="aspect-[5/2] w-full object-cover xl:rounded-3xl"
          />
        </div>

        {/* Values section */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our values
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our values are the guiding principles that shape our every action
              and decision. They represent the core beliefs that drive our
              mission to empower patients, offer hope, and provide access to
              rare medications.
            </p>
          </div>
          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {values.map((value) => (
              <div key={value.name}>
                <dt className="font-semibold text-gray-900">{value.name}</dt>
                <dd className="mt-1 text-gray-600">{value.description}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="bg-teal-500 mt-32">
          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Ready to place a request?
              <br />
              Find hope and healing with us.
            </h2>
            <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
              <Link
                href="https://wa.me/+2349012558753"
                className="rounded-md bg-teal-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-900"
              >
                Consult our Pharmacists Now
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mx-auto mt-10 max-w-7xl overflow-hidden px-6  sm:pb-24 lg:px-8">
        <div className="mt-10 flex justify-center space-x-10">
          {footerNavigation.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <p className="mt-10 text-center text-xs leading-5 text-gray-500">
          &copy; {`${new Date().getFullYear()}`} Solondu Life Sciences, Ltd. All
          rights reserved.
        </p>
      </footer>
    </div>
  );
}

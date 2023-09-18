import React from 'react'
import './Resume.css'
import '../Home/Home.css'

const Resume = () => {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="mx-auto page-padding max-w-3xl">
        <div className="text-left">
          <h1 className="code-h1 text-xl tracking-tight sm:text-6xl">
            <span className="code animation">Resume</span>
          </h1>
          <h1 className="name text-gray-100">Work Experience</h1>

          {/* Work Ex */}
          <h2 className="resume-company name text-blue-400">Slalom</h2>
          <h2 className="resume-dates name text-blue-200">
            January 2022 — Present
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-200">
            Working with multiple fortune 100 companies and cross functionally
            with teams in design, engineering, strategy, business, as well as
            stakeholders from discovery to launch. Finding the needs of the
            clients and the best way to measure success, and translating those
            into valuable, lasting solutions.
          </p>
          <ul className="list-disc list">
            <li className="mt-6 text-lg leading-8 text-gray-200">
              Implemented multiple full stack applications using Angular, Java
              Springboot, Node, and React.
            </li>
            <li className="mt-6 text-lg leading-8 text-gray-200">
              Throughly test full stack applications using Karma and Jest.
            </li>
            <li className="mt-6 text-lg leading-8 text-gray-200">
              Managed Frontend development efforts which led to an increase in
              velocity and story point completion,
            </li>
            <li className="mt-6 text-lg leading-8 text-gray-200">
              Launched an application for a large insurance provider that led to
              more than a 50% increase in work productivity by the users.
            </li>
          </ul>
          {/* Work Ex 2*/}
          <h2 className="resume-company name text-blue-400">Neudesic</h2>
          <h2 className="resume-dates name text-blue-200">
            November 2020 — January 2022
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-200">
            Worked cross functionally with teams in design, engineering, and the
            business stakeholders to find the needs of the clients and deliver
            the best solution possible.
          </p>
          <ul className="list-disc list">
            <li className="mt-6 text-lg leading-8 text-gray-200">
              Contributed to the success of various client’s projects by
              improving performance, motivation, and architecture of software
              systems using languages/libraries such as Git, Angular, React.js,
              C, Yaml, Node.js, Flask, Terraform.
            </li>
            <li className="mt-6 text-lg leading-8 text-gray-200">
              Optimized the efficiency of the current CI/CD pipeline, using Git
              Actions and Azure. Automating the build and deployment of these
              components directly led to a decrease in costs by more than 40%.
            </li>
          </ul>

          <h1 className="name text-gray-100">Education</h1>

          {/* Education */}
          <h2 className="resume-company name text-blue-400">
            University of Missouri
          </h2>
          <h2 className="resume-dates name text-blue-200">
            August 2016 — May 2020
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-200">
            BS in Computer Science, University of Missouri, Columbia, Missouri
          </p>
          <ul className="list-disc list">
            <li className="mt-6 text-lg leading-8 text-gray-200">
              Graded as an Honor Scholar
            </li>
          </ul>
        </div>
      </div>
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </div>
  )
}

export default Resume

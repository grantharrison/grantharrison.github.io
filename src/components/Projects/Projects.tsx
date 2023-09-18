import React from 'react'
import './Projects.css'

const Projects = () => {
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
            <span className="code animation">Projects</span>
          </h1>
          <h2 className="project-title name text-blue-400">
            <a
              className="project-title-link"
              href="https://github.com/grantharrison/personal-website"
            >
              Personal Website
            </a>
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-200">
            This website itself was actually built and deployed by me! I used
            React with Typescript to develop this website, then deployed it on
            Netlify. The purpose of this was to not only show off my frontend
            development skills but also to have a place to host all my other
            skills as well. Ask me questions about it or take a look at
            yourself.
          </p>
          <h2 className="project-title name text-blue-400">
            Kids Code (Private)
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-200">
            This is a project I am working on that will allow kids at young ages
            to learn the art of programming, to help develop a better generation
            of innovators and thinkers. It is built with angular and node, its
            still a work in progress let me know if you would like to take a
            look, thanks!
          </p>
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

export default Projects

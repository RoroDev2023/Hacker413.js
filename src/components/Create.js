import React, { useState } from 'react';

function Create() {
  const [email, setEmail] = useState('');
  const [projectName, setProjectName] = useState('');
  const [nftType, setNftType] = useState('');
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState('');
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('email', email);
    formData.append('projectName', projectName);
    formData.append('nftType', nftType);
    formData.append('image', image);
    formData.append('description', description);

    const data = {
        email,
        projectName,
        nftType,
        image,
        description,
      };

    setSubmittedData(data);

    

    setEmail('');
    setProjectName('');
    setNftType('');
    setImage(null);
    setDescription('');
  };


  const SubmittedCard = ({ data }) => {
    return (
      <div className="bg-white dark:bg-gray-900 p-4 rounded-3xl shadow-md mt-4 h-96 w-80 m-auto mb-4">
        <h3 className="text-xl text-white font-semibold mb-2">{data.projectName}</h3>
        <img
          src={data.image ? URL.createObjectURL(data.image) : ''}
          alt="Submitted NFT"
          className="w-full h-32 object-cover rounded-md mb-4"
        />
        <p className="text-gray-500">{data.description}</p>
      </div>
    );
  };
  

  return (
    <div>
      <section className="bg-white dark:bg-gray-900 bg-[url('https://wallpaperaccess.com/full/505837.jpg')] bg-cover">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md ">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
            Create Your NFT 👇🏻
          </h2>
          <form
            onSubmit={handleSubmit}
            className="space-y-8 mt-12 bg-[#111827] p-8 rounded-2xl"
          >
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">
                Your email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="name@flowbite.com"
                required
              />
            </div>
            <div>
              <label htmlFor="subject" className="block mb-2 text-sm font-medium text-white">
                Name of your Project
              </label>
              <input
                type="text"
                id="subject"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="e.g Journal Edition No. 1"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-white">
                Type of NFT
              </label>
              <div className='pt-2'>
                <button
                  className="bg-red-100 text-red-800 text-md font-medium me-2 px-2.5 py-1.5 dark:bg-gray-700 dark:text-red-400 border border-red-400 rounded-2xl"
                  onClick={() => setNftType('Art')}
                >
                  Art
                </button>
                <button
                  className="bg-green-100 text-green-800 text-md font-medium me-2 px-2.5 py-1.5 dark:bg-gray-700 dark:text-green-400 border border-green-400 rounded-2xl"
                  onClick={() => setNftType('Journalism')}
                >
                  Journalism
                </button>
              </div>
            </div>
            <div>
              <label htmlFor="image" className="block mb-2 text-sm font-medium text-white">
                Upload your NFT (image)
              </label>
              <input
                type="file"
                name="image"
                id="image"
                onChange={(e) => setImage(e.target.files[0])}
                className="text-white"
                placeholder="e.g png, jpg"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block mb-2 text-sm font-medium text-white">
                Give a description (optional)
              </label>
              <input
                type="text"
                id="subject"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="a bit about your project"
              />
            </div>
            <button
              type="submit"
              className="bg-[#1e90ff] py-3 px-5 text-sm font-medium text-center text-white rounded-lg  sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 hover:bg-blue-700"
            >
              Create
            </button>
          </form>
        </div>
      </section>
      <div > {submittedData && <SubmittedCard data={submittedData} />} </div>
    </div>
  );
}

export default Create;

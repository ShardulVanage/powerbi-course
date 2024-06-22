const plans = [
    {
      id: 1,
      name: '1',
      memory: 'Monday/Wednesday',
      cpu: '8:00-10:00pm',
      storage: '128 GB SSD disk',
      price: '$40',
      isCurrent: false,
    },
    {
        id: 1,
        name: '2',
        memory: 'Tuesday/Thursday',
        cpu: '8:00-10:00pm',
        storage: '128 GB SSD disk',
        price: '$40',
        isCurrent: false,
      },
      {
        id: 1,
        name: '3',
        memory: 'Saturday/Sunday',
        cpu: '8:00-10:00pm',
        storage: '128 GB SSD disk',
        price: '$40',
        isCurrent: false,
      },
   
    // More plans...
  ]
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
  export default function Table() {
    return (
      <div className="px-4 sm:px-6 lg:px-8 pt-12">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-2xl  font-bold leading-6 text-gray-900">Batches</h1>
            <p className="mt-2 text-sm text-gray-700">
            Introducing the Power BI Masterclass, A Comprehensive  <strong className="font-semibold text-gray-900 text-base">3-Week Program</strong>
            </p>
          </div>
          {/* <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
            <button
              type="button"
              className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Update credit card
            </button>
          </div> */}
        </div>
        <div className="-mx-4 mt-10 ring-1 ring-gray-900 sm:mx-0 sm:rounded-lg">
          <table className="min-w-full divide-y divide-gray-900">
            <thead>
              <tr>
                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                  Batch
                </th>
                <th
                  scope="col"
                  className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
                >
                  Days
                </th>
                <th
                  scope="col"
                  className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
                >
                  Timing
                </th>
                <th
                  scope="col"
                  className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
                >
                  Price
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  
                </th>
                <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                  <span className="sr-only">Select</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {plans.map((plan, planIdx) => (
                <tr key={plan.id}>
                  <td
                    className={classNames(
                      planIdx === 0 ? '' : 'border-t border-transparent',
                      'relative py-4 pl-4 pr-3 text-sm sm:pl-6'
                    )}
                  >
                    <div className="font-medium text-gray-900 ">
                      {plan.name}
                      {plan.isCurrent ? <span className="ml-1 text-indigo-600">(Current Plan)</span> : null}
                    </div>
                    <div className="mt-1 flex flex-col text-gray-900 sm:block lg:hidden">
                      <span>
                        {plan.memory} / {plan.cpu}
                      </span>
                      <span className="hidden sm:inline">·</span>
                      <span>{plan.storage}</span>
                    </div>
                    {planIdx !== 0 ? <div className="absolute -top-px left-6 right-0 h-px bg-gray-900" /> : null}
                  </td>
                  <td
                    className={classNames(
                      planIdx === 0 ? '' : 'border-t border-gray-800',
                      'hidden px-3 py-3.5 text-sm text-gray-900 font-medium lg:table-cell'
                    )}
                  >
                    {plan.memory}
                  </td>
                  <td
                    className={classNames(
                      planIdx === 0 ? '' : 'border-t border-gray-800',
                      'hidden px-3 py-3.5 text-sm text-gray-900 lg:table-cell'
                    )}
                  >
                    {plan.cpu}
                  </td>
                  <td
                    className={classNames(
                      planIdx === 0 ? '' : 'border-t border-gray-800',
                      'hidden px-3 py-3.5 text-sm text-gray-900 lg:table-cell'
                    )}
                  >
                    {plan.price}
                  </td>
                  <td
                    className={classNames(
                      planIdx === 0 ? '' : 'border-t border-gray-800',
                      'px-3 py-3.5 text-sm text-gray-900'
                    )}
                  >
                    
                    <a className="rounded-md bg-yellow-500/90 drop-shadow-sm px-12 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ">Buy Now</a>
                  </td>
                
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
  
import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "runtimewarning-coroutine-was-never-awaited",
  "name": "RuntimeWarning: coroutine was never awaited",
  "category": "python",
  "badges": [
    "Python Async",
    "Runtime Warning",
    "Common"
  ],
  "updatedAt": "June 29, 2026",
  "shortDescription": "This warning occurs when an asynchronous function (coroutine) is called like a regular function without the 'await' keyword.",
  "meanDescription": "The 'RuntimeWarning: coroutine was never awaited' is raised by the Python garbage collector when a coroutine object is garbage collected without ever being executed. In Python's asyncio subsystem, calling an 'async def' function does not run its body immediately; instead, it returns a lazy coroutine generator object. To actually execute the code inside the coroutine, you must explicitly use the 'await' keyword inside another async function, or run it through 'asyncio.run()'.",
  "causes": [
    "Forgetting the await keyword: Invoking 'my_async_func()' like a standard synchronous function without prepending 'await'.",
    "Misconfigured call chains: Running async methods from synchronous code blocks without binding them to an active event loop.",
    "Creating tasks without executing them: Storing coroutine objects inside variables or lists and letting them fall out of scope without awaiting them."
  ],
  "solutions": [
    "Prepend the await keyword: Write 'await my_async_func()' inside async block statements.",
    "Execute using asyncio.run(): Start top-level event loop runtimes using 'asyncio.run(main())' inside entry scripts.",
    "Schedule tasks dynamically: Schedule execution using 'asyncio.create_task(coroutine)' or gather execution using 'asyncio.gather()'."
  ],
  "example": {
    "title": "Syntax representation",
    "code": "script.py:7: RuntimeWarning: coroutine 'fetch_data' was never awaited\n  fetch_data()\nRuntimeWarning: Enable tracemalloc to get the object allocation traceback",
    "language": "python"
  },
  "exampleRequest": {
    "title": "Before (Triggering CLI command)",
    "code": "import asyncio\n\nasync def fetch_data():\n    await asyncio.sleep(1)\n    return \"data\"\n\nasync def main():\n    # Wrong: calling async function without await\n    fetch_data()\n\nasyncio.run(main())",
    "language": "python"
  },
  "exampleResponse": {
    "title": "Terminal Output Example",
    "code": "script.py:9: RuntimeWarning: coroutine 'fetch_data' was never awaited\n  fetch_data()\nRuntimeWarning: Enable tracemalloc to get the object allocation traceback",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "Await Implementation",
      "language": "python",
      "description": "Prepend async calls with the await keyword inside async block environments to ensure execution.",
      "code": "import asyncio\n\nasync def fetch_data():\n    await asyncio.sleep(0.1)\n    return \"data\"\n\nasync def main():\n    # Correct: awaits execution of the coroutine\n    result = await fetch_data()\n    print(result)\n\nasyncio.run(main())"
    },
    {
      "name": "Concurrent Gathering",
      "language": "python",
      "description": "Gather multiple coroutines to execute them concurrently using asyncio utilities.",
      "code": "import asyncio\n\nasync def task(n):\n    await asyncio.sleep(0.1)\n    return n * 2\n\nasync def main():\n    # Correct: gathers all coroutines and awaits their combined returns\n    results = await asyncio.gather(task(1), task(2), task(3))\n    print(results)  # [2, 4, 6]\n\nasyncio.run(main())"
    }
  ],
  "serverExamples": [
    {
      "name": "Linux",
      "language": "bash",
      "description": "Enable asyncio debug variables in bash to print allocation tracebacks when warnings trigger.",
      "code": "export PYTHONASYNCIODEBUG=1\npython3 script.py"
    },
    {
      "name": "Windows",
      "language": "powershell",
      "description": "Set asyncio debug variables inside Windows PowerShell prompts.",
      "code": "$env:PYTHONASYNCIODEBUG=1\npython script.py"
    },
    {
      "name": "macOS",
      "language": "bash",
      "description": "Enable debug flags inline when running macOS python commands.",
      "code": "PYTHONASYNCIODEBUG=1 python3 script.py"
    }
  ],
  "commonMistakes": [
    "Calling an async function inside a standard synchronous function without registering it to an event loop, leaving the coroutine unexecuted.",
    "Assuming list comprehensions of async calls (e.g. `[fetch() for _ in range(5)]`) executes them (this only creates a list of lazy unawaited coroutine objects)."
  ],
  "prevention": [
    "Enable async linting checks inside editor profiles to automatically highlight unawaited coroutine calls.",
    "Utilize Python's debug parameters in testing pipelines to fail builds when unawaited warnings trigger."
  ],
  "faq": [
    {
      "question": "What does 'coroutine was never awaited' mean?",
      "answer": "It means you called an asynchronous function ('async def') but did not await it. Calling an async function only creates a coroutine object; it does not execute the code inside unless it is awaited."
    },
    {
      "question": "How do I execute a coroutine?",
      "answer": "Prepend it with the 'await' keyword inside an async function: 'await my_function()'. If you are in the top-level script scope, start the event loop using 'asyncio.run(my_function())'."
    },
    {
      "question": "Can I use await inside a synchronous function?",
      "answer": "No, the 'await' keyword can only be used inside functions declared with 'async def'. To run async code from a synchronous function, use 'asyncio.run()' or interact with an active event loop."
    },
    {
      "question": "How do I debug unawaited coroutines?",
      "answer": "Enable asyncio debug mode by setting the environment variable 'PYTHONASYNCIODEBUG=1' before running your script. This will print a traceback showing exactly where the unawaited coroutine was originally created."
    }
  ],
  "helpfulResources": [
    {
      "name": "Python asyncio - Debug Mode documentation",
      "url": "https://docs.python.org/3/library/asyncio-dev.html#asyncio-debug-mode"
    }
  ],
  "relatedErrors": [
    "typeerror"
  ],
  "quickFix": {
    "causes": [
      "Missing 'await' keyword prefix when calling an async def function",
      "Calling asynchronous functions inside synchronous contexts",
      "Orphaned coroutine generator objects falling out of scope"
    ],
    "checklist": [
      "Prepend async calls with the 'await' keyword",
      "Start top level routines using asyncio.run()",
      "Enable debug mode: export PYTHONASYNCIODEBUG=1",
      "Gather tasks using asyncio.gather()"
    ],
    "estimatedTime": "2 minutes"
  },
  "causesTable": [
    {
      "cause": "Forgetting the await keyword on async function calls",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Running async code from synchronous contexts",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "Orphaning coroutine objects inside variables",
      "frequency": "⭐⭐⭐"
    }
  ],
  "comments": [],
  "seoTitle": "Debug RuntimeWarning: coroutine was never awaited in Python.",
  "seoDescription": "RuntimeWarning: coroutine was never awaited in Python — learn the exact causes and how to resolve them. Includes quick fix checklist, real code samples, and."
};

export default errorData;

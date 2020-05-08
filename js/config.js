var config = {
    container: "#tree",
    nodeAlign: "BOTTOM",
    scrollbar: "fancy",
    connectors: {
      type: "step",
      style: {
        stroke: "#666",
      },
    },
    node: {
      HTMLclass: "node",
      collapsable: true,
    },
    levelSeparation: 80,
    siblingSeparation: 100,
  },
  ceo = {
    text: {
      name: "Master",
      title: "U00000000",
      desc: "Registered",
      contact: "2020-01-04",
    },
  },
  cto = {
    parent: ceo,
    text: {
      name: "Joe Linux",
      title: "U00000000",
      desc: "Registered",
      contact: "2020-01-04",
    },
  },
  cbo = {
    parent: ceo,
    childrenDropLevel: 2,
    text: {
      name: "Linda May",
      title: "U00000000",
      desc: "Registered",
      contact: "2020-01-04",
    },
  },
  cdo = {
    parent: ceo,
    text: {
      name: "John Green",
      title: "U00000000",
      desc: "Registered",
      contact: "2020-01-04",
    },
  },
  cio = {
    parent: cto,
    text: {
      name: "Ron Blomquist",
      title: "U00000000",
      desc: "Registered",
      contact: "2020-01-04",
    },
  },
  ciso = {
    parent: cto,
    text: {
      name: "Michael Rubin",
      title: "U00000000",
      contact: "we@aregreat.com",
      desc: "Registered",
      contact: "2020-01-04",
    },
  },
  cio2 = {
    parent: cdo,
    text: {
      name: "Erica Reel",
      title: "U00000000",
      desc: "Registered",
      contact: "2020-01-04",
    },
  },
  ciso2 = {
    parent: cbo,
    text: {
      name: "Alice Lopez",
      title: "U00000000",
      desc: "Registered",
      contact: "2020-01-04",
    },
  },
  ciso3 = {
    parent: cbo,
    text: {
      name: "Mary Johnson",
      title: "U00000000",
      desc: "Registered",
      contact: "2020-01-04",
    },
  },
  ciso4 = {
    parent: cbo,
    text: {
      name: "Kirk Douglas",
      title: "U00000000",
      desc: "Registered",
      contact: "2020-01-04",
    },
  },
  cisoo1 = {
    parent: ciso4,
    text: {
      name: "Kirk Douglas",
      title: "U00000000",
      desc: "Registered",
      contact: "2020-01-04",
    },
  },
  cisoo2 = {
    parent: ciso4,
    text: {
      name: "Kirk Douglas",
      title: "U00000000",
      desc: "Registered",
      contact: "2020-01-04",
    },
  },
  cisoo3 = {
    parent: ciso4,
    text: {
      name: "Kirk Douglas",
      title: "U00000000",
      desc: "Registered",
      contact: "2020-01-04",
    },
  },
  cisoo4 = {
    parent: ciso4,
    text: {
      name: "Kirk Douglas",
      title: "U00000000",
      desc: "Registered",
      contact: "2020-01-04",
    },
  },
  cisoo5 = {
    parent: ciso4,
    text: {
      name: "Kirk Douglas",
      title: "U00000000",
      desc: "Registered",
      contact: "2020-01-04",
    },
  },
  chart_config = [
    config,
    ceo,
    cto,
    cbo,
    cdo,
    cio,
    ciso,
    cio2,
    ciso2,
    ciso3,
    ciso4,
    cisoo1,
    cisoo2,
    cisoo3,
    cisoo4,
    cisoo5,
  ];

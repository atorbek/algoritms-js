const mails = [
  'GALAXY-42/SYSTEM/PLANET:{}',
  'GALAXY-42/SYSTEM/PLANET:{Code}',
  'GALAXY-42/System/PLANET:{Code}',
  'GALAXY-42/SYSTEM/PLANET{Code}',
  'LONGGALAXY-42/SYSTEM/PLANET:{Code}',
  'GALAXY-4/SYSTEM/PLANET:{Code}',
  'GALAXY-4815162342/SYSTEM/PLANET:{Code}',
  'GALAXY-42/THE-SOLAR-SYSTEM/PLANET:{Code}',
  'GALAXY-42/-SYSTEM/PLANET:{Code}',
  'GALAXY-42/SYSTEM1/PLANET:{Code}',
  'GALAXY-42/SYS--TEM/PLANET:{Code}',
  'GALAXY-42/LANGUAGE/JAVA:{Code}',
  'GALAXY-42/LANGUAGE/SCALA:{Code}',
  'GALAXY-42/LANGUAGE/JS:{Code}',
  'GALAXY-42/LANGUAGE/PYTHON:{Code}',
  'GALAXY-42/SYSTEM/PLANET:{Simple text... @null == undefined@}',
  'GALAXY-42/SYSTEM/PLANET:{@typeof null@@typeof typeof null@}'
];

function antispam(input) {
  const filteredMails = input.filter((mail) => {
    const chunks = mail.split('/');

    const galaxy = RegExp('^[A-Z]{2,8}-[0-9]{2,8}$');
    const planetarySystem = RegExp('^(?!-)(?!.*--)[A-Z-]+(?<!-)$');
    const planet = RegExp('^(?:([A-Z])(?!.*\\1))*$');
    const subscribe = chunks[2].split(':');

    return (
      galaxy.test(chunks[0]) &&
      planetarySystem.test(chunks[1]) &&
      planet.test(subscribe[0])
    );
  });

  return filteredMails.map((mail) =>
    mail.replace(/(\@)(.*?)(\@)/g, (match, ...p) =>
      ['<spam>', p[1], '</spam>'].join('')
    )
  );
}

module.exports = antispam;

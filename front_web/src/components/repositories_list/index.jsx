import React from 'react';

const ReposList = ({repos}) => {
  return (
    <>
      {repos 
        ? 
          repos.map( (repo, index) => {
            return  <p key={`repo${index}`}>
                      <a href={repo.html_url} target="_blank" rel="noreferrer">{repo.full_name}</a>
                      <li>
                        Linguagem utilizada: {repo.language}
                      </li>
                      <li>
                        Descrição: {repo.description}
                      </li>
                      <li>
                        Data de criação: {repo.created_at}
                      </li>
                      <li>
                        Último push: {repo.pushed_at}
                      </li>
                    </p>
          })
        :
          ''}
    </>
  );
}

export default ReposList;
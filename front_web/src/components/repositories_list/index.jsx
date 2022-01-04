import React from 'react';

import { RepositorioList, RepositorioListItem, Link, Divider } from '../styles';

const ReposList = ({repos}) => {
  return (
    <>
      {repos 
        ? 
          repos.map( (repo, index) => {
            return  (
              <>
                    <Divider></Divider>
                    <Link href={repo.html_url} target="_blank" rel="noreferrer">{repo.full_name}</Link>
                    <RepositorioList key={`repo${index}`}>
                      {/* <RepositorioListItem>
                        <a  href={repo.html_url} target="_blank" rel="noreferrer">{repo.full_name}</a>
                      </RepositorioListItem> */}

                      <RepositorioListItem>
                        Linguagem utilizada: {repo.language}
                      </RepositorioListItem>

                      <RepositorioListItem>
                        Descrição: {repo.description}
                      </RepositorioListItem>

                      <RepositorioListItem>
                        Data de criação: {repo.created_at}
                      </RepositorioListItem>
                      
                      <RepositorioListItem>
                        Último push: {repo.pushed_at}
                      </RepositorioListItem>
                    </RepositorioList>
              </>
            )
          })
        :
          ''}
    </>
  );
}

export default ReposList;
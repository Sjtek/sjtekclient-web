node {
    stage('Publish') {
        git scm
        sshagent(['2cbac8c5-d82b-48ce-b835-aa49953cb161']) {
            sh 'ssh -vvv -o StrictHostKeyChecking=no sjtek rm -rv /sjtek/config/nginx/html/*'
            sh 'scp -r root/* sjtek:/sjtek/config/nginx/html'
        }
    }
}

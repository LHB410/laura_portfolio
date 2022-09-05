class ContactsController < ApplicationController

  def home
  end

  def new
    @contact = Contact.new
  end

  def create
    @contact = Contact.new(params[:contact])
    @contact.request = request
    if @contact.deliver
      flash.now[:success] = 'Message sent!'
    else
      flash.now[:error] = 'Could not send message'
      render :home
    end
  end

  private

 def contact_params
    params.require(:contact).permit(:contact)
  end
end

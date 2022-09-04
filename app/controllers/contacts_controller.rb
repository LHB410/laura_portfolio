class ContactsController < ApplicationController
  # before_action :set_contact
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
      render :new
    end
  end

  private

  # def set_contact
  #   @contact = Contact.find(params[:contact])
  # end

  def contact_params
    params.require(:contact).permit(:contact)
  end
end
